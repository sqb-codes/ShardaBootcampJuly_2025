const User = require('../models/User');

// @desc Register a new user
exports.registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        // check if user already exists
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        // create new user
        const user = new User({name, email, password, role});
        await user.save();
        console.log("User registered successfully");
        return res.status(201).json({message: "User registered successfully", user});
    } catch (error) {
        console.error("User registration failed",error);
        return res.status(500).json({message: "Failed to register user"});
    }
}

// Login user
exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        // find user by email
        const user = await User.findOne({email});
        if(user && (await user.matchPassword(password))) {
            console.log("User logged in successfully");
            return res.status(200).json({message: "User logged in successfully", user});
        }
    } catch (error) {
        console.log("User login failed", error);
        return res.status(500).json({message: "Failed to login user"});
    }
}