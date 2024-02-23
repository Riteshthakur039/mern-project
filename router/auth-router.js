const express = require("express")
const router = express.Router();
const authcontroller= require("../controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require('../middlewares/auth-middelware')

router.route("/").get(authcontroller.home);

router.route("/register").post(validate(signupSchema), authcontroller.register);


router.route("/login").post(validate(loginSchema), authcontroller.login);

router.route('/user').get(authMiddleware, authcontroller.user);

module.exports = router ;