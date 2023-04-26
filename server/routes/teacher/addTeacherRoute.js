const express = require("express");
const teacherController = require("../../controllers/teacher/addTeacherController");

const router = express.Router();

    // Post

    router.post("/addTeacherDetails", teacherController.addTeacherDetails)

    // Get

    router.get("/getTeacherDetails", teacherController.getTeacherDetails)

    // Get by id

    router.get("/getidTeacherDetails/:id", teacherController.getidTeacherDetails)

    // Delete

    router.delete("/deleteTeacherDetails/:id", teacherController.deleteTeacherDetails)

    // Put

    router.put("/editTeacherDetails/:id", teacherController.editTeacherDetails)


module.exports = router;