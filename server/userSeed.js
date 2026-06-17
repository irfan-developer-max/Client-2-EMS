import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";
const seedUsers=async()=>{
    connectDB();
    try {
        const hashPassword=await bcrypt.hash("admin123",10);
        const newUsers= new User({
            name:"admin",
            email:"admin@gamil.com",
            password:hashPassword,
            role:"admin",
        })
        await newUsers.save();
        console.log("Users seeded successfully");
    }
    catch(error) {
        console.error("Error seeding users:", error);
    }
}
seedUsers();