const express = require('express')
const userController=require('../controller/userController')
const router=express.Router()

router.route('/').post(userController.CreateUser).get(userController.getUser)
router.route('/:id').get(userController.getUserById)

module.exports=router
