import React, { Component } from 'react'
import { withOoth } from 'ooth-client-react'
import styles from '../styles/verify-email.scss'

export default withOoth(
  class VerifyEmail extends Component {
    state = {
      verified: false,
      error: null,
    }
    componentDidMount() {
        if (!this.props.token) {
            console.error('No token specified.')
            return
        }
        this.props.oothClient.method('local', 'verify', {
            token: this.props.token
        }).then(() => {
            this.setState({
                verified: true
            })
        }).catch(e => {
            this.setState({
                error: e.message
            })
        })
    }
    render() {
      return (
        <div className="root">
          <h1>Verificación de Correo Electrónico</h1>
          {!this.props.token && <p className="error-message">No se especificó un token.</p>}
          {this.state.error && <p className="error-message">{this.state.error}</p>}
          {this.props.token && this.state.verified && <p className="sent-email-message">Tu Correo Electrónico ha sido verificado exitosamente.</p>}
          {this.props.token && !this.state.verified && <p className="sent-email-message">Verificando Correo Electrónico...</p>}

          <style jsx>{styles}</style>
        </div>
      )
    }
  }
)