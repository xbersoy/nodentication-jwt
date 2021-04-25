const Joi = require('joi');

// validations 
const registerValidation = (oUser) => {
    const jUserSchema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(8).required()
    });
    
    return jUserSchema.validate(oUser);
};


const loginValidation = (oUser) => {
    const jUserSchema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(8).required()
    });
    
    return jUserSchema.validate(oUser);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
