import React, {Component} from 'react'
import {withUser, withOoth} from 'ooth-client-react'
import {compose} from 'recompose'
import styles from '../styles/email-form.scss'

export default compose(
    withUser,
    withOoth
)(class EmailForm extends Component {
    state = {sent: false}
    render() {
        const user = this.props.user
        return <div className="root">
            <p>Tu Correo Electrónico <b>{user.local.email}</b> ({user.local.verified ? 'ha sido verificado' : 'aún NO ha sido verificado'}).</p>
            {this.state.sent ?
                <p>Correo Electrónico de verificación enviado.</p>
            :
                !user.local.verified && <button onClick={() => {
                    this.props.oothClient.method('local', 'generate-verification-token')
                        .then(() => {
                            this.setState({
                                sent: true
                            })
                        })
                }} className="btn btn-default">Enviar Correo Electrónico de Verificación</button>
            }
            <style jsx>{styles}</style>
        </div>
    }
})