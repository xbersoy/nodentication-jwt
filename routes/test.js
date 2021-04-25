const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.send({
        employeeId: 1,
        name: "Burak"
    });
});

module.exports = router;