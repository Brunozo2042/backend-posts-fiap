 import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({

    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true, select: false},
    email: {type: String, required: true},
    mobilePhone : {type: Number, required: false},
    isActive: {type: String, required: true}
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

 export const User = mongoose.model("User", userSchema);

