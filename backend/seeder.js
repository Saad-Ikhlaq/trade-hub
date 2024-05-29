import mongoose from 'mongoose';
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import colors from 'colors'
import e from 'express';

dotenv.config()
connectDB();

const importData = async () =>{

    try {
        
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers.find(user=> user.isAdmin===true).id        

        const sampleProducts = products.map((prod)=>{

            return {...prod, user: adminUser}
        })

        const createdProducts = await Product.insertMany(sampleProducts);

        console.log(`Data Imported`.green.inverse);

        process.exit();

    } catch (error) {
        console.log(error.message);
    }
}

const destroyData = async () =>{

    try {
        
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log(`Data Destroyed`.red.inverse);

        process.exit();

    } catch (error) {
        console.log(error.message);
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData();
}