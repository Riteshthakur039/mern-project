
const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


const home = async (req, res) => {
    try{
        res.status(200).send("Welcome to the home");

    }catch (error) {
        console.log(error);
    }
};


const register = async (req, res) => {
    try{
            const {username, email, phone, password} = req.body;
       const userExist =await User.findOne({email});

       if(userExist) {
        return res.status(400).json({message: "eamil already exists"})
       }

    //    const saltRound = 10;
    //    const has_password = await bcrypt.hash(password, saltRound)

     const userCreated =  await User.create({
        username, 
        email, 
        phone, 
        password, //: has_password
    });
        res
    .status(201)
    .json({msg : "registration successfull", 
        token: await userCreated.generateToken(), 
        userId: userCreated._id.toString(), 
    });
    }
    catch (error){
        // res.status(400).send({msg:req.body})
        next(error);
    }
}


// login page logic


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // const passwordMatch = await bcrypt.compare(password, userExist.password);
        const passwordMatch = await userExist.comparePassword(password);


        if (passwordMatch) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'wrong credentials' });
    }
};


// to send user data user logic

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }

}



module.exports = {home, register, login, user};