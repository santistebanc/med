import React, {Component} from 'react'
import {withUser, withOoth} from 'ooth-client-react'
import {compose} from 'recompose'
import styles from '../styles/username-form.scss'

export default compose(
    withOoth,
    withUser
)(class UsernameForm extends Component {
    state = {
            status: null,
            message: null,
        }
    render() {
        const user = this.props.user
        return <div>
            {user.local.username ?
                <p>Tu Nombre de Usuario actual es: <b>{user.local.username}</b>.</p>
            :
                <p>No tienes un Nombre de Usuario definido aún.</p>
            }
            <form onSubmit={e => {
                e.preventDefault();
                const username = this.username.value
                if (!username) {
                    return
                }
                this.props.oothClient.method('local', 'set-username', {
                    username
                }).then(({message}) => {
                    this.setState({
                        status: 'success',
                        message
                    });
                }).catch(({message}) => {
                    this.setState({
                        status: 'error',
                        message
                    })
                })
            }}>
                {this.state.status === 'success' &&
                    <div className="alert alert-success" role="alert">
                        {this.state.message}
                    </div>
                }
                {this.state.status === 'error' &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                }
                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario</label>
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
                    <button type="submit" className="btn btn-primary btn-block">Crear Nombre de Usuario</button>
                </div>
            </form>
            <style jsx>{styles}</style>
        </div>
    }
})