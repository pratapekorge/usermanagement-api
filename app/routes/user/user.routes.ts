import Router   from "express";
import ApiResponse  from "../../utilities/ApiResponse"
// const body = require("express-validator")
import userschema  from "../../middleware/user.middleware"
import express  from "express";
import {body,validationResult}  from "express-validator";
import usercontroller from "../../controller/usercontroller";
const router = Router();

router.post('/fetch/userlist',
    usercontroller.fetchusers )


router.post('/create/user',
    // userschema.getuserId,
    usercontroller.createuser )

   router.get('/fetch/userByid',
    usercontroller.fetchUserById
    )

router.put(`/update/userByid`,

    usercontroller.updateUserById
)










export default router

