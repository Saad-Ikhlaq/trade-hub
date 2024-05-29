import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import "dotenv";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import sendEmail from "../utils/sendEmails.js";

// POST api/usersl/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // if(!user.isverified){
  //   res.status(500).json({msg: "account is not verified"})
  // }

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isVerified: user.isVerified,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or Password");
  }
});

// GET /api/users/profile
const userProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// PUT /api/users/profile    --> update user route
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(user.id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//signup
// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const verificationString = uuid();

  const user = await User.create({ name, email, password, verificationString });

  //--------------------------------------

  sendEmail(name, email, verificationString);

  //--------------------------------------

  if (user) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.id),
      verificationString: user.verificationString,
      isVerified: user.isVerified,
    });
  } else {
    res.status(404);
    throw new Error("Invalid User Data");
  }
});

// POST /api/users/google
const googleAuth = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });
  console.log(userExists, "user Exists");

  if (userExists) {
    // res.status(201);
    // throw new Error("User already exists");
    res.status(201);
    res.json({
      _id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
      token: generateToken(userExists.id),
    });
  } else {
    const user = await User.create({
      name,
      email,
      password: process.env.GOOGLE_PASSWORD,
    });

    if (user) {
      res.status(201);
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("Invalid User Data");
    }
  }
});

// -------------------- ADMIN ONLY ROUTES -----------------------

// getting All of the users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
});

// deleting User Via Admin Account
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed Successfully" });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

// Getting users data
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Update User Endpoint via Admin Acount
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// verify Email
const verifyEmail = asyncHandler(async (req, res) => {

  console.log('inside verify Email');

  const user = await User.findOne({
    verificationString: req.params.verificationString,
  });

  if (user) {
    user.isVerified = true;

    const updatedUser = await user.save();

    console.log(updatedUser);

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isVerified: updatedUser.isVerified,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  userProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
  googleAuth,
  verifyEmail,
};
