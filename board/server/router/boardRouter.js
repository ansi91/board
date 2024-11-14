import express from 'express'
import * as controller from '../controller/boardController.js'

const router = express.Router();

router.post('/new', controller.insert)


export default router