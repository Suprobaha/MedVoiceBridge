import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true,"First Name is Required"],
        minLength: [3, "First Name Must Contain At Least 3 Characters! "],
    },
    lastName:{
        type: String,
        required: [true,"Last Name is Required"],
        minLength: [3, "Last Name Must COntain At Least 3 Characters! "],
    },
    email: {
        type: String,
        required: [true,"Email is Required"],
        validate: [validator.isEmail, "Please Provide A Valid Email!"],
    },
    phone: {
        type: String,
        required: [true,"Phone Number is Required"],
        minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    nic: {
        type: String,
        required: [true,"NIC is Required!"],
        minLength: [9, "NIC Must Contain Exact 9 digits!"],
        maxLength: [9, "NIC Must Contain Exact 9 digits!"],
    },
    dob:{
        type: Date,
        required: [true, "DOB is required!"],
    },
    gender: {
        type: String,
        required: [true,"Gender is Required"],
        enum: ["Male", "Female"],
    },
    password: {
        type: String,
        minLength: [8, "Password Must Contain At Least 8 Characters"],
        required: [true,"Password is Required"],
        select: false,
    },
    role:{
        type: String,
        required: [true,"User Role is Required!"],
        enum:["Admin","Patient","Doctor"],
    },
    doctorDepartment:{
      type: String,
    },
    docAvatar:{
        public_id: String,
        url: String,
    },
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
       next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};





export const User = mongoose.model("User", userSchema);