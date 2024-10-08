import nodemailer from "nodemailer";

export const sendEmail = (name, email, verificationString) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohammad.saad7991@gmail.com",
      pass: "fhwa qksw lbnb qifb",
    },
  });

  var mailOptions = {
    from: "mohammad.saad7991@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `Hey ${name} please verify your email address: 
    Click on the below link to verify your account: http://localhost:3000/verify-email/${verificationString}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendEmail;
