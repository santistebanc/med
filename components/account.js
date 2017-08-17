import React, {Component} from 'react'
import {withUser, withOoth} from 'ooth-client-react'
import {compose} from 'recompose'
import withLoginRequired from '../hocs/login-required'
import EmailForm from './email-form'
import UsernameForm from './username-form'
import ChangePasswordForm from './change-password-form'
import styles from '../styles/account.scss'


export default compose(
    withLoginRequired('/account')
)(() => (
    <div className="root">
        <h1>Cuenta de Usuario</h1>
        <h2>Nombre de Usuario</h2>
        <UsernameForm/>
        <h2>Correo Electrónico</h2>
        <EmailForm/>
        <h2>Contraseña</h2>
        <ChangePasswordForm/>

        <style jsx>{styles}</style>
    </div>
))
