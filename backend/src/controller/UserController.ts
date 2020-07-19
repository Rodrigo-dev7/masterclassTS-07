import { Request, Response } from 'express';
import EmailService from '../service/EmailService';

const users = [
  { name: 'Diego', email: 'diego@rocketseat.com.br' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailservice = new EmailService();

    emailservice.sendMail({
      to: {
        name: 'Diego Fernandes',
        email: 'diego@rocketseat.com.br'
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem-vindo novammente ao sitema'
      }
    });
    return res.send();
  }
};