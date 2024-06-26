import { Router } from 'express';
import AuthController from '../../controllers/auth/auth.controller';

const authRoutes = Router();

authRoutes.post('/register', AuthController.store);
authRoutes.post('/login', AuthController.login);
authRoutes.post('/refresh', AuthController.refresh);
authRoutes.post('/logout', AuthController.logout);
authRoutes.put('usuarios/:id', AuthController.mudarNome);

export default authRoutes;
