const nodemailer = require('nodemailer');
const person = require('./model/Person')

exports.sendEmail = function (person, req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "ramper.pruebas@gmail.com",
            pass: 'xxxxxx'
        }
    });

    var body = "Hola " + person.name + "!\n\n\n" +
        "Te has registrado correctamente, tus datos son:\n\n" +
        "Celular:" + person.phone + "\n\n" +
        "Empresa:" + person.company + "\n\n" +
        "Muchas gracias!"

    var mailOptions = {
        from: 'me',
        to: person.email,
        subject: 'Registro exitoso',
        text: body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error); res.json({
                status: 'Error'
            })
        } else {
            console.log("email sent");
            res.json({
                status: 'Email sent'
            })
        }
    })
}
