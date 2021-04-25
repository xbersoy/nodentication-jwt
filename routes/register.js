const router = require('express').Router();
const registrationController = require('../controller/register');
const responseManager = require('../middleware/responseManager');

/* 
  This endpoint registers a new user. 
*/
router.post('/register', async (req, res, next) => {
  responseManager.async(req, res, next, registrationController.registerUser(req.body));
});

module.exports = router;