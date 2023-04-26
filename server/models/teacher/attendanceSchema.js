const mongoose = require('mongoose')
const attendanceSchema = new mongoose.Schema({

    Date: {
        type: String,
        require: true
    },
    SelectClass: {
        type: String,
        require: true
    },
    Division: {
        type: Number,
        require: true
    },
    Subject: {
        type: String,
        require: true
    },
    Period: {
        type: String,
        require: true
    }

})
const Attendance = mongoose.model("attendance", attendanceSchema);
module.exports = Attendance;