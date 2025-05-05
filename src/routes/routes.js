import express from 'express';
import { register } from '../controller/authController.js';

export const router = express.Router();

router.post('/register',register)
router.post()