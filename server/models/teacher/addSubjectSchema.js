const mongoose = require('mongoose')
const subjectSchema = new mongoose.Schema({

    SubjectName: {
        type: String,
        require: true
    },
    SubjectCode: {
        type: String,
        require: true
    },
    SubjectTeacher: {
        type: String,
        require: true
    },
    BookName: {
        type: String,
        require: true
    }
})
const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;