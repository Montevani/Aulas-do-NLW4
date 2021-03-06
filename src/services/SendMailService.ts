import nodemailer, { Transporter } from "nodemailer";
import { resolve } from 'path';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {
    private client: Transporter;
    constructor() { //método que é executado assim que uma classe é instanciada
        nodemailer.createTestAccount().then((account) => {
            const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            },
        });

        this.client = transporter;
    });
}


    async execute(to: string, subject: string, body: string) {
        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs"); //criando caminho
        const templateFileContent = fs.readFileSync(npsPath).toString("utf8"); //lendo arquivo

        const mailTemplateParse = handlebars.compile(templateFileContent); //compilando template

        const html = mailTemplateParse({
            name: to,
            title:subject,
            description: body
        }); //colocando variaveis nos devidos lugares

        const message = await this.client.sendMail({
            to,
            subject,
            html: body,
            from: "NPS <noreply@nps.com.br>"
        });

        console.log("Message sent: %s", message.messageID);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService();