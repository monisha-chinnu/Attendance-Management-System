const express = require("express");
const attendanceController = require("../../controllers/teacher/attendanceController");

const router = express.Router();

    // Post

    router.post("/addAttendanceDetails", attendanceController.addAttendanceDetails)

    // Get

    router.get("/getAttendanceDetails", attendanceController.getAttendanceDetails)

    // Get by id

    router.get("/getidAttendanceDetails/:id", attendanceController.getidAttendanceDetails)

    // Delete

    router.delete("/deleteAttendanceDetails/:id", attendanceController.deleteAttendanceDetails)

    // Put

    router.put("/editAttendanceDetails/:id", attendanceController.editAttendanceDetails)


module.exports = router;