const Attendance = require("../../models/teacher/attendanceSchema");
module.exports = {

  // post

  addAttendanceDetails: async (req, res) => {
    const data = new Attendance({
      Date: req.body.Date,
      SelectClass: req.body.SelectClass,
      Division: req.body.Division,
      Subject: req.body.Subject,
      Period: req.body.Period
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

  getAttendanceDetails: async (req, res) => {
    try {
      const attendance = await Attendance.find();
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteAttendanceDetails: async (req, res) => {
    try {
      const attendance = await Attendance.findByIdAndDelete(req.params.id);
      if (!attendance) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editAttendanceDetails: async (req, res) => {
    try {
      await Attendance.findByIdAndUpdate(req.params.id, {
        Date: req.body.Date,
        SelectClass: req.body.SelectClass,
        Division: req.body.Division,
        Subject: req.body.Subject,
        Period: req.body.Period
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidAttendanceDetails: async (req, res) => {
    const attendance = req.params;
    try {
      const data = await Attendance.findById(attendance.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}