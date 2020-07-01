const express = require('express');
const {registerRules, validator} = require('../middlewares/validators')
const userController = require('../controllers/user.Controller')
const router = express.Router();
const isAuth = require('../middlewares/passport-setup')


router.post('/register', registerRules(), validator, userController.register)


router.post('/login', userController.login)


router.get('/current', isAuth(), (req, res) =>res.json(req.user))


router.put("/:id", isAuth(), userController.editUserById);


module.exports = router