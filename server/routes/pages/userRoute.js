const express = require("express");
const userController = require("../../controllers/pages/userController");

const router = express.Router();

    // Sign up

    router.post("/Signup", userController.Signup)

    // Sign in

    router.post("/Signin", userController.Signin)
    
    // Verification Token

    router.post("/Verifytoken", userController.Verifytoken)


module.exports = router;