const express = require("express");
const subjectController = require("../../controllers/teacher/addSubjectController");

const router = express.Router();

    // Post

    router.post("/addSubjectDetails", subjectController.addSubjectDetails)

    // Get

    router.get("/getSubjectDetails", subjectController.getSubjectDetails)

    // Get by id

    router.get("/getidSubjectDetails/:id", subjectController.getidSubjectDetails)

    // Delete

    router.delete("/deleteSubjectDetails/:id", subjectController.deleteSubjectDetails)

    // Put

    router.put("/editSubjectDetails/:id", subjectController.editSubjectDetails)


module.exports = router;