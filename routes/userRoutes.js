const express = require('express');

const {allUsers,CreateUser,DeleteUser,login} =require('../controllers/userController')

router=express.Router()



router.get('/',allUsers)
router.post('/',CreateUser)
router.delete('/:id',DeleteUser)
router.post('/login',login)

module.exports=router