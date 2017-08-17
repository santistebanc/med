import React, { Component } from 'react'
import { withOoth } from 'ooth-client-react'
import styles from '../styles/reset-password.scss'

export default withOoth(
  class ResetPassword extends Component {
    state = {
      sent: false,
      error: null,
    }
    render() {
      return (
        <div className="root">
          <h1>Reestablecer Contraseña</h1>
          {!this.props.token && <p className="error-message">{this.state.error}</p>}
          {this.props.token && this.state.sent && <p className="sent-email-message">Tu contraseña ha sido reestablecida. <a href="/login">Inicia Sesión</a> con tu nueva contraseña</p>}
          {this.props.token && !this.state.sent && <form onSubmit={e => {
                    e.preventDefault()
                    const password = this.password.value;
                    const password2 = this.password2.value;
                    if (password !== password2) {
                        console.error('Passwords don\'t match.')
                        return
                    }
                    this.props.oothClient.method('local', 'reset-password', {
                        token: this.props.token,
                        newPassword: password
                    }).then(() => {
                        this.setState({
                            sent: true
                        })
                    })
                }}>
                    <div className="form-group">
                        <label htmlFor="password">Nueva Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            ref={password => {
                                this.password = password
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Repite la Nueva Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            ref={password2 => {
                                this.password2 = password2
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Reestablecer Contraseña</button>
                    </div>
                </form>}

          <style jsx>{styles}</style>
        </div>
      )
    }
  }
)