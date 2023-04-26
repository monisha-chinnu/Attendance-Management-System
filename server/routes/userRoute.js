const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

    // Sign up

    router.post("/Signup", userController.Signup)

    // Sign in

    router.post("/Signin", userController.Signin)
    
    // Verification Token

    router.post("/Verifytoken", userController.Verifytoken)

    // Forgot Password

    router.post("/F", userController.F)



module.exports = router;