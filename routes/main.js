const express = require('express');
const router = express.Router();

const {login,dashboard} = require('../controllers/main');
const {authMiddleware} = require('../middleware/auth');

router.get('/dashboard',authMiddleware,dashboard) //chaining of middlware functions done using next() method
router.post('/login',login)

module.exports = router;