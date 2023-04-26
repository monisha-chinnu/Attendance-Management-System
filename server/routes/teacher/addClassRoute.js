const express = require("express");
const classController = require("../../controllers/teacher/addClassController");

const router = express.Router();

    // Post

    router.post("/addClassDetails", classController.addClassDetails)

    // Get

    router.get("/getClassDetails", classController.getClassDetails)

    // Get by id

    router.get("/getidClassDetails/:id", classController.getidClassDetails)

    // Delete

    router.delete("/deleteClassDetails/:id", classController.deleteClassDetails)

    // Put

    router.put("/editClassDetails/:id", classController.editClassDetails)


module.exports = router;