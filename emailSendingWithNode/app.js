const path = require('path')
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'endereco SMTP',
    port: 587, /* geralmente padrao para portas nao criptografadas */
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("<a href='/contato.html'>Contato</a>")
})

app.post('/contato', (req, res) => {
    let email = req.body.emailaddress;
    let subject = req.body.subject;
    let message = req.body.message;

    transporter.sendMail({
        from: process.env.EMAIL_USER, // eh importante que esse email seja com o mesmo dominio do site
        to: proccess.env.EMAIL_USER,
        replyTo: email,
        subject: subject,
        text: message
    }).then(info=>{
        console.log(info);
        res.send("Mensagem Enviada com sucesso")
    }).catch(error=>{
        console.log(error);
        res.send("Ocorreu um erro no envio")
    })

})

app.listen(3000, () => {
    console.log("running on 3000")
})