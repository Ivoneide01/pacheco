const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'neidinidnid05@gmail.com', // Seu email
        pass: '1852209Nid#', // Sua senha
    }
});

exports.sendEmail = functions.database.ref('/contatos/{pushId}')
    .onCreate((snapshot, context) => {
        const contato = snapshot.val();

        const mailOptions = {
            from: 'neidinidnid05@gmail.com',
            to: 'neidinidnid@hotmail.com',
            subject: 'Novo Contato Recebido',
            text: `Nome: ${contato.nome}\nEmail: ${contato.email}`
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Erro ao enviar email:', error);
            } else {
                console.log('Email enviado:', info.response);
            }
        });
    });

    const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");