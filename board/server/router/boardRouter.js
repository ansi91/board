import express from 'express';
import * as controller from '../controller/boardController.js';
//board Router 설정
const router = express.Router();

router.post('/new',controller.insert)


export default router