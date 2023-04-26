const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// rest object
const app = express()
const connect = require('./mongodb/config');

const userRoute = require('./routes/userRoute');

const addClassRoute = require('./routes/teacher/addClassRoute');
const addStudentRoute = require('./routes/teacher/addStudentRoute');
const addSubjectRoute = require('./routes/teacher/addSubjectRoute');
const addTeacherRoute = require('./routes/teacher/addTeacherRoute');
const attendanceRoute = require('./routes/teacher/attendanceRoute');

// dotenv config
dotenv.config()

// mongoose connection
connect(); 

// middle ware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/userRoute", userRoute);

// Teacher routes

app.use("/addClassRoute", addClassRoute);
app.use("/addStudentRoute", addStudentRoute);
app.use("/addSubjectRoute", addSubjectRoute);
app.use("/addTeacherRoute", addTeacherRoute);
app.use("/addTeacherRoute", addTeacherRoute);
app.use("/attendanceRoute", attendanceRoute);



// port
const PORT = process.env.PORT

// listen port
app.listen(PORT, () => {console.log(`Server is porting on ${process.env.NODE_MODE} mode on port ${process.env.PORT}`)})







