const router = require('express').Router();
const verify = require('../service/verifyToken');
const User = require('../model/User');

router.get('/', verify, async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
});

module.exports = router;