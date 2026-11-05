import {Router} from 'express';import {login,registerAdmin} from '../controllers/authController.js';const router=Router();router.post('/login',login);router.post('/register-admin',registerAdmin);export default router;
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

