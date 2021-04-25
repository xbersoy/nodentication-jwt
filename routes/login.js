const router = require('express').Router();
const loginController = require('../controller/login');
const responseManager = require('../middleware/responseManager');

router.post('/login', async (req, res, next) => {
    try {
        responseManager.async(req, res, next, loginController.login(req.body));
    } catch (error) {
        throw error;
    }
});

module.exports = router;