import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import CardController from './app/controllers/CardController';

import authMiddleware from './app/middlewares/auth';
import checkCard from './app/middlewares/checkCard';

const routes = Router();

routes.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin *');
  res.header('Access-Control-Allow-Methods GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers Content-Type, Authorization');

  next();
});

routes.get('/', (req, res) => res.json('API-SCRAPBOOK-STRUTURE'));
routes.post('/users', UserController.store);
routes.post('/login', AuthController.store);

routes.use(authMiddleware);

routes.get('/cards', CardController.index);
routes.get('/cards/:id', checkCard, CardController.show);
routes.post('/cards', CardController.store);
routes.put('/cards/:id', checkCard, CardController.update);
routes.delete('/cards/:id', checkCard, CardController.delete);

export default routes;
