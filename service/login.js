const User = require('../model/User');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('../validations/userValidation');

module.exports.login = async (oUser) => {

        const { error } = loginValidation(oUser);

    if (error) {
        return error.details[0].message;
    }

    const existingUserObject = await User.findOne({email: oUser.email});
    if (!existingUserObject) {
        return 'E-Mail or password is wrong.';
    }

    const isPassValid = await bcyrpt.compare(oUser.password, existingUserObject.password);
    if(!isPassValid) {
        return 'Invalid password';
    }

    // generate and assign token
    const token = jwt.sign({_id: existingUserObject._id}, process.env.JWT_SECRET);

    return token;
}