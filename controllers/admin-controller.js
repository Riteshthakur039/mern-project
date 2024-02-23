const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const { user } = require('./auth-controller');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const getAllContacts = async (req, res, next) => {

    try {
        const contacts = await Contact.find();

        if(! contacts || contacts.length === 0) {
            return res.status(400).json({message: "No Contacts found"});
        }
        return res.status(200).json(contacts);

    } catch (error) {
        console.log(error);
    }

};


const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
      const data = await User.findOne({_id:id }, {password: 0});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        res.status(200).json({message: "User deleted Successfully"});
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;

        const updatedData = await User.updateOne({_id:id}, {
            $set: updateUserData,
        })
res.status(200).json(updatedData);

    } catch (error) {
        next(error);
    }
}


const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        res.status(200).json({message: "Contact deleted Successfully"});
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};
