const express = require('express');
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middelware');
const adminMiddleware = require('../middlewares/admin-middleware');
const { userSchema } = require('../validator/auth-validator');
const validate = require("../middlewares/validate-middleware");

const router = express.Router();

router.route("/users").get(authMiddleware,adminMiddleware, adminController.getAllUsers);

router.route("/users/:id").get(authMiddleware,adminMiddleware, adminController.getUserById);

router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,validate(userSchema), adminController.updateUserById);

router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteContactById);

module.exports = router;