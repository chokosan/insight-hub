import express from 'express'
import {register,login} from '../Controllers/user.controller.js'
import upload from '../Middlewares/multer.js'

const router = express.Router()

router.post('/register',upload.single('image'),register)
router.post("/login",login)

export default router