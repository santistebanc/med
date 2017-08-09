const express = require('express')
const Ooth = require('ooth')
const oothLocal = require('ooth-local')
//const oothFacebook = require('ooth-facebook')
//const oothGoogle = require('ooth-google')
const mail = require('./mail')

module.exports = async function start(app, settings) {

    const ooth = new Ooth({
        mongoUrl: settings.mongoUrl,
        sharedSecret: settings.sharedSecret,
        path: settings.oothPath,
    })

    await ooth.start(app)

    const sendMail = mail(settings.mailgun)
    ooth.use('local', oothLocal({
        onRegister({email, verificationToken}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Gracias por Registrarte en MexicoEnDron. Verifica tu correo electrónico',
                body: `Porfavor verifica tu correo electrónico siguiendo la siguiente liga: /verify-email?token=${verificationToken}.`,
                html: `Porfavor verifica tu correo electrónico siguiendo la siguiente liga: /verify-email?token=${verificationToken}.`,
            })
        },
        onGenerateVerificationToken({email, verificationToken}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Verifica tu correo electrónico',
                body: `Porfavor verifica tu correo electrónico siguiendo la siguiente liga: /verify-email?token=${verificationToken}.`,
                html: `Porfavor verifica tu correo electrónico siguiendo la siguiente liga: /verify-email?token=${verificationToken}.`,
            })
        },
        onVerify({email}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Correo electrónico verificado',
                body: `Tu correo electrónico ha sido verificado exitosamente.`,
                html: `Tu correo electrónico ha sido verificado exitosamente.`,
            })
        },
        onForgotPassword({email, passwordResetToken}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Recuperar Contraseña',
                body: `Reestablece tu contraseña con la siguiente liga: /reset-password?token=${passwordResetToken}.`,
                html: `Reestablece tu contraseña con la siguiente liga: /reset-password?token=${passwordResetToken}.`,
            })
        },
        onResetPassword({email}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Contraseña Reestablecida',
                body: 'Tu contraseña ha sido reestablecida',
                html: 'Tu contraseña ha sido reestablecida'
            })
        },
        onChangePassword({email}) {
            sendMail({
                from: settings.mail.from,
                to: email,
                subject: 'Tu contraseña ha sido modificada',
                body: 'Tu contraseña ha sido modificada exitosamente.',
                html: 'Tu contraseña ha sido modificada exitosamente.'
            })
        }
    }))

    //ooth.use('facebook', oothFacebook(settings.facebook))

    //ooth.use('google', oothGoogle(settings.google))

}