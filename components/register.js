import React, { Component } from 'react'
import withRouter from '../hocs/router'
import { withOoth, withUser } from 'ooth-client-react'
import { compose } from 'recompose'

export default ({ next }) => (
  <div>
    <h1>Registro de Usuario</h1>
    <RegisterForm next={next} />
    <p>Ya tienes una cuenta de usuario? <a href="/login">Iniciar sesión</a>.</p>
  </div>
)

class RegisterFormComponent extends Component {
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
    if (this.props.user) {
      return <p>Ya has iniciado sesión. Haz click <a href={this.props.next || '/dashboard'}>aquí</a> para redireccionar la página.</p>
    } else {
      return <form onSubmit={e => {
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
            "Este Correo Electrónico ya ha sido registrado.":
            "Error. Verifique los datos ingresados."
          })
        })
      }}>
        {this.state.error &&
          <div className="error-message" role="alert">
            {this.state.error}
          </div>
        }
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            ref={email => {
              this.email = email
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="******"
            ref={password => {
              this.password = password
            }}
          />
        </div>
        <div className="form-group">
          <button type="submit">Registrar</button>
        </div>
      </form>
    }
  }
}
export const RegisterForm = compose(
  withRouter,
  withOoth,
  withUser
)(RegisterFormComponent)
