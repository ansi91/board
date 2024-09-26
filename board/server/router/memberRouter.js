import express from 'express'
import * as controller from '../controller/memberController.js'


const router = express.Router();

router.post('/idcheck',controller.idCheck)
router.post('/signup',controller.signup)

export default router