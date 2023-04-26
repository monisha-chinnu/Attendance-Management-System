const express = require("express");
const studentController = require("../../controllers/teacher/addStudentController");

const router = express.Router();

    // Post

    router.post("/addStudentDetails", studentController.addStudentDetails)

    // Get

    router.get("/getStudentDetails", studentController.getStudentDetails)

    // Get by id

    router.get("/getidStudentDetails/:id", studentController.getidStudentDetails)

    // Delete

    router.delete("/deleteStudentDetails/:id", studentController.deleteStudentDetails)

    // Put

    router.put("/editStudentDetails/:id", studentController.editStudentDetails)


module.exports = router;