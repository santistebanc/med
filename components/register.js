import React, { Component } from 'react'
import withRouter from '../hocs/router'
import { withOoth, withUser } from 'ooth-client-react'
import { compose } from 'recompose'
import styles from '../styles/register.scss'

export default compose(
  withRouter,
  withOoth,
  withUser
)(class Register extends Component {
  state = { error: null }

  componentDidMount() {
    if (this.props.user) {
      this.props.Router.replace(this.props.next || '/gallery')
    }
  }
  componentDidUpdate() {
    if (this.props.user) {
      this.props.Router.replace(this.props.next || '/gallery')
    }
  }
  render() {
    return (
      <div className="root">
        <h1>Registro de Usuario</h1>
        {this.props.user ? <div>
          <p>Ya tienes una sesión de usuario iniciada.</p>
          <p>Haz click <a href={this.props.next || '/gallery'}>aquí</a> si la página no se redirecciona automáticamente.</p>
        </div> :
          <form onSubmit={e => {
            e.preventDefault()
            const email = this.email.value,
              password = this.password.value;
            this.props.oothClient.method('local', 'register', {
              email,
              password
            }).then(() => {
              const authResponse = this.props.oothClient.authenticate('local', 'login', {
                username: email,
                password
              })
            }).catch(e => {

              this.setState({
                error: e.message == "This email is already registered." ?
                  "Este Correo Electrónico ya ha sido registrado." :
                  e.message == "Password must contain digits, lowercase and uppercase letters and be at least 6 characters long." ?
                    "La contraseña debe contener digitos, letras minúsculas y mayúsculas, y contener al menos 6 caracteres" :
                    "Error. Verifique los datos ingresados."
              })
            })
          }}>
            {this.state.error &&
              <div className="error-message" role="alert">
                {this.state.error}
              </div>
            }
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={email => {
                  this.email = email
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
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
              <button type="submit">Registrarse</button>
            </div>
          </form>}
        <p>Ya tienes una cuenta de usuario? <a href="/login">Iniciar sesión</a>.</p>
        <style jsx>{styles}</style>
      </div>)
  }
})
