const registerationService = require('../service/register')

exports.registerUser = async (requestBody) => {
    const registeredUser = await registerationService.registerUser(requestBody);
    return registeredUser;
};