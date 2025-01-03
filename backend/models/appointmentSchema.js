import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
    appointment_date:{
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    doctor:{
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        }
    },
    hasVisited:{
        type: Boolean,
        default: false,
    },
    doctorId:{
        type: mongoose.Schema.ObjectId,
        required: true,

    },
    patientId:{
        type: mongoose.Schema.ObjectId,
        required: true,

    },
    address:{
        required: true,
        type: String,
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);