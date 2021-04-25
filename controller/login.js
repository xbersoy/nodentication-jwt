const loginService = require('../service/login')

exports.login = async (requestBody) => {
    const loggedInUser = await loginService.login(requestBody);
    return loggedInUser;
};