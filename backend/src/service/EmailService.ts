interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachtment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// DTO: Data Transfer Object 

interface IEmailService {
  sendMail(resquest: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({to, message}: IMessageDTO ) {
    console.log(`Email Enviado para ${to.name} : ${message.subject}`)
  }
}

export default EmailService;