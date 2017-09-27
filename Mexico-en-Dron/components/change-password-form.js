import React, {Component} from 'react'
import {withOoth} from 'ooth-client-react'
import styles from '../styles/change-password-form.scss'

export default withOoth(class ChangePasswordForm extends Component {
    constructor() {
        super()
        this.state = {
            sent: false,
            error: false
        }
    }
    render() {
        if (this.state.sent) {
            return <p>Contraseña Actualizada</p>
        } else {
            return <div className="root"><form onSubmit={e => {
                e.preventDefault()
                const password = this.password.value;
                const newPassword = this.newPassword.value;
                const newPassword2 = this.newPassword2.value;
                if (newPassword !== newPassword2) {
                    return this.setState({
                        error: 'Las Contraseñas no coinciden'
                    })
                }
                this.props.oothClient.method('local', 'change-password', {
                    token: this.props.token,
                    password,
                    newPassword
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
                    <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
                }
                <div className="form-group">
                    <label htmlFor="password">Contraseña Anterior</label>
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
                    <label htmlFor="newPassword">Contraseña Nueva</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        ref={newPassword => {
                            this.newPassword = newPassword
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword2">Repite la Contraseña Nueva</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword2"
                        ref={newPassword2 => {
                            this.newPassword2 = newPassword2
                        }}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Cambiar Contraseña</button>
                </div>
                
            </form>    
            <style jsx>{styles}</style>
            </div>    
        }
    }
})