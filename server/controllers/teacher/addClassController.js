const Class = require("../../models/teacher/addClassSchema");
module.exports = {

    // post

    addClassDetails: async (req, res) => {
        const data = new Class({
            ClassName: req.body.ClassName,
            Division: req.body.Division,
            ClassTeacher: req.body.ClassTeacher,
            ClassroomNumber: req.body.ClassroomNumber,
            ClassCapacity: req.body.ClassCapacity,

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

    getClassDetails: async (req, res) => {
        try {
            const classes = await Class.find();
            res.json(classes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


    //delete

    deleteClassDetails: async (req, res) => {
        try {
            const classes = await Class.findByIdAndDelete(req.params.id);
            if (!classes) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


    //put

    editClassDetails: async (req, res) => {
        try {
            await Class.findByIdAndUpdate(req.params.id, {
                ClassName: req.body.ClassName,
                Division: req.body.Division,
                ClassTeacher: req.body.ClassTeacher,
                ClassroomNumber: req.body.ClassroomNumber,
                ClassCapacity: req.body.ClassCapacity,
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    // get by id

    getidClassDetails: async (req, res) => {
        const classes = req.params;
        try {
            const data = await Class.findById(classes.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

}