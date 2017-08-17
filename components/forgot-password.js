import React, { Component } from 'react'
import { withOoth } from 'ooth-client-react'
import styles from '../styles/forgot-password.scss'

export default withOoth(
  class ForgotPassword extends Component {
    state = {
      sent: false,
      error: null,
    }
    render() {
      return (
        <div className="root">
          <h1>Recuperación de Contraseña</h1>
          {this.state.sent && <p className="sent-email-message">Se ha enviado un correo electrónico para reestablecer la contraseña.</p>}
          <form onSubmit={e => {
            e.preventDefault()
            const username = this.username.value;
            this.props.oothClient.method('local', 'forgot-password', {
              username
            }).then(() => {
              this.setState({
                sent: true
              })
            }).catch(e => {
              this.setState({
                error: e.message
              })
            })
          }}>
            {this.state.error &&
              <div className="error-message" role="alert">
                {this.state.error}
              </div>
            }
            <div className="form-group">
              <label htmlFor="username">Usuario o Correo Electrónico</label>
              <input
                type="text"
                className="form-control"
                id="username"
                ref={username => {
                  this.username = username
                }}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Enviar Correo Electrónico de Recuperación</button>
            </div>
          </form>
          <p>Regresar a <a href="/login">Inicio de Sesión</a>.</p>
          <style jsx>{styles}</style>
        </div>
      )
    }
  }
)