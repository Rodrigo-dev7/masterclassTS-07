import Routes  from 'express';
import UserController from './controller/UserController';
import EmailService from './service/EmailService';

const routes = Routes();


routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

export default routes;