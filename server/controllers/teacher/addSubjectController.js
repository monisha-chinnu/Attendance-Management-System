const Subject = require("../../models/teacher/addSubjectSchema");
module.exports = {

  // post

  addSubjectDetails: async (req, res) => {
    const data = new Subject({
      SubjectName: req.body.SubjectName,
      SubjectCode: req.body.SubjectCode,
      SubjectTeacher: req.body.SubjectTeacher,
      BookName: req.body.BookName
    });
    console.log(data);

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //get

  getSubjectDetails: async (req, res) => {
    try {
      const subject = await Subject.find();
      res.json(subject);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteSubjectDetails: async (req, res) => {
    try {
      const subject = await Subject.findByIdAndDelete(req.params.id);
      if (!subject) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editSubjectDetails: async (req, res) => {
    try {
      await Subject.findByIdAndUpdate(req.params.id, {
        SubjectName: req.body.SubjectName,
        SubjectCode: req.body.SubjectCode,
        SubjectTeacher: req.body.SubjectTeacher,
        BookName: req.body.BookName
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidSubjectDetails: async (req, res) => {
    const subject = req.params;
    try {
      const data = await Subject.findById(subject.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}