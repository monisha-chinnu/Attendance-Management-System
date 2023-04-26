const Student = require("../../models/teacher/addStudentSchema");
module.exports = {

  // post

  addStudentDetails: async (req, res) => {
    const data = new Student({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      PhoneNo: req.body.PhoneNo,
      DOB: req.body.DOB,
      BloodGroup: req.body.BloodGroup,

      CommAddress: req.body.CommAddress,
      State: req.body.State,
      CityORTown: req.body.CityORTown,
      PINCode: req.body.PINCode,

      PermAddress: req.body.PermAddress,
      PState: req.body.PState,
      PCityORTown: req.body.PCityORTown,
      PPINCode: req.body.PPINCode,

      FatherName: req.body.FatherName,
      FatherPhone: req.body.FatherPhone,
      FatherEmail: req.body.FatherEmail,
      FatherOccupation: req.body.FatherOccupation,

      MotherName: req.body.MotherName,
      MotherPhone: req.body.MotherPhone,
      MotherEmail: req.body.MotherEmail,
      MotherOccupation: req.body.MotherOccupation,

      JoiningDate: req.body.JoiningDate,
      SelectClass: req.body.SelectClass,
      Division: req.body.Division,
      RollNo: req.body.RollNo
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

  getStudentDetails: async (req, res) => {
    try {
      const student = await Student.find();
      res.json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteStudentDetails: async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editStudentDetails: async (req, res) => {
    try {
      await Student.findByIdAndUpdate(req.params.id, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        PhoneNo: req.body.PhoneNo,
        DOB: req.body.DOB,
        BloodGroup: req.body.BloodGroup,
  
        CommAddress: req.body.CommAddress,
        State: req.body.State,
        CityORTown: req.body.CityORTown,
        PINCode: req.body.PINCode,
  
        PermAddress: req.body.PermAddress,
        PState: req.body.PState,
        PCityORTown: req.body.PCityORTown,
        PPINCode: req.body.PPINCode,
  
        FatherName: req.body.FatherName,
        FatherPhone: req.body.FatherPhone,
        FatherEmail: req.body.FatherEmail,
        FatherOccupation: req.body.FatherOccupation,
  
        MotherName: req.body.MotherName,
        MotherPhone: req.body.MotherPhone,
        MotherEmail: req.body.MotherEmail,
        MotherOccupation: req.body.MotherOccupation,
  
        JoiningDate: req.body.JoiningDate,
        SelectClass: req.body.SelectClass,
        Division: req.body.Division,
        RollNo: req.body.RollNo
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidStudentDetails: async (req, res) => {
    const student = req.params;
    try {
      const data = await Student.findById(student.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}