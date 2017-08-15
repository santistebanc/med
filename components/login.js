import { compose } from 'recompose'
import { withOoth, withUser } from 'ooth-client-react'
import withRouter from '../hocs/router'
import React, { Component } from 'react'
import styles from '../styles/login.scss'

export default compose(
  withRouter,
  withOoth,
  withUser
)(class Login extends Component {
  state = { error: null }
  componentDidMount() {
    if (this.props.user) {
      this.props.Router.push(this.props.next || '/dashboard')
    }
  }
  componentDidUpdate() {
    if (this.props.user) {
      this.props.Router.push(this.props.next || '/dashboard')
    }
  }
  render() {
    return (
      <div className="root">
        <h1>Inicio de sesión</h1>
        {this.props.user ? <div>
          <p>Ya tienes una sesión de usuario iniciada.</p>
          <p>Haz click <a href={this.props.next || '/dashboard'}>aquí</a> si la página no se redirecciona automáticamente.</p>
        </div> :
          <form onSubmit={e => {
            e.preventDefault()
            const username = this.username.value,
              password = this.password.value;
            this.props.oothClient.authenticate('local', 'login', {
              username,
              password
            }).catch(e => {

              this.setState({
                error: e.message == "Incorrect email or username." ?
                  "Correo electrónico o contraseña incorrectos." :
                  "Error. Verifique los datos ingresados."
              })
            })
          }}>
            {this.state.error && <div className="error-message" role="alert">
              {this.state.error}
            </div>}
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
            <a className="forgot-password-label" href="/forgot-password">Olvidaste tu Contraseña?</a>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
            </div>
          </form>}
        <p>Aún no tienes cuenta? <a href="/register">Registrarse</a>.</p>
        <style jsx>{styles}</style>
      </div>)
  }
})