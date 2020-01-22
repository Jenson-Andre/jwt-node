import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.use(cors());

routes.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin *');
  res.header('Access-Control-Allow-Methods GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers Content-Type');

  next();
});

routes.get('/', (req, res) => res.json('JWT-API'));


routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.post('/login', AuthController.store);

routes.use(authMiddleware);

routes.get('/test-auth', (req, res) => res.json({ logged: req.userId, result: 'JWT-API-AUTH' }));

export default routes;
