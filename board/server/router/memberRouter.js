import express from 'express'
import * as controller from '../controller/memberController.js'


const router = express.Router();

router.post('/idcheck',controller.idCheck)


export default router