const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({

    ClassName: {
        type: String,
        require: true
    },
    Division: {
        type: String,
        require: true
    },
    ClassTeacher: {
        type: String,
        require: true
    },
    ClassroomNumber: {
        type: String,
        require: true
    },
    ClassCapacity: {
        type: String,
        require: true
    }
})
const Class = mongoose.model("classes", classSchema);
module.exports = Class;