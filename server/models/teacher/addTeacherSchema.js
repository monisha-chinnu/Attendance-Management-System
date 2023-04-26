const mongoose = require('mongoose')
const TeacherSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Qualification: {
        type: String,
        require: true
    },
    PhoneNo: {
        type: Number,
        require: true
    },
    DOB: {
        type: Date,
        require: true
    },
    BloodGroup: {
        type: String,
        require: true
    },

    // Address

    CommAddress: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    CityORTown: {
        type: String,
        require: true
    },
    PINCode: {
        type: Number,
        require: true
    },

    PermAddress: {
        type: String,
        require: true
    },
    PState: {
        type: String,
        require: true
    },
    PCityORTown: {
        type: String,
        require: true
    },
    PPINCode: {
        type: Number,
        require: true
    },

    // Parent Details

    FatherName: {
        type: String,
        require: true
    },
    FatherPhone: {
        type: Number,
        require: true
    },
    FatherEmail: {
        type: String,
        require: true
    },
    FatherOccupation: {
        type: String,
        require: true
    },

    MotherName: {
        type: String,
        require: true
    },
    MotherPhone: {
        type: Number,
        require: true
    },
    MotherEmail: {
        type: String,
        require: true
    },
    MotherOccupation: {
        type: String,
        require: true
    },

    // School Details
    
    JoiningDate: {
        type: String,
        require: true
    },
    SelectClass: {
        type: String,
        require: true
    },
    Division: {
        type: String,
        require: true
    },
    RollNo: {
        type: Number,
        require: true
    }
})
const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;