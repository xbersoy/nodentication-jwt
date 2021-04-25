const User = require('../model/User');
const bcyrpt = require('bcryptjs');
const { registerValidation } = require('../validations/userValidation');

module.exports.registerUser = async (oUser) => {
    const { error } = registerValidation(oUser);

    if (error) {
        return error.details[0].message;
    }

    const isEmailExist = await User.findOne({ email: oUser.email });
    if (isEmailExist) {
        return 'E-Mail already exist.';
    }

    const salt = await bcyrpt.genSalt(10);
    const hashedPass = await bcyrpt.hash(oUser.password, salt);

    const user = new User({
        name: oUser.name,
        email: oUser.email,
        password: hashedPass
    });
    try {
        const savedUser = await user.save();
        return savedUser;
    } catch (error) {
        return error;
    }
}