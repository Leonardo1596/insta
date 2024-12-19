const User = require('../models/UserSchema');

const register = async (req, res, next) => {
    try {
        // Creation of new user
        let user = new User({
            email: req.body.email,
            password: req.body.password,
        });

        // Save user
        const savedUser = await user.save();
        console.log('Successfully registered');
        console.log(`User: ${savedUser.username}`);
        console.log(savedUser);

        res.status(201).json({ userProfile: savedUser, message: 'Successfully registered' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'An error occurred' });
    }
};

module.exports = {
    register
}