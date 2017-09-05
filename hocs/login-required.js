import React, {Component} from 'react'
import withRouter from './router'
import {withUser} from 'ooth-client-react'
import {compose} from 'recompose'

export default url => {
    const withLoginRequired = C => (
        class extends Component {
            componentDidMount() {
                if (!this.props.user) {
                    this.props.Router.replace(`/login?next=${encodeURIComponent(url)}`)
                }
            }
            render() {
                if (this.props.user) {
                    return <C {...this.props}/>
                } else {
                    return <div className="container">
                        <p>Tienes que iniciar sesión para ver esta página.</p>
                    </div>
                }
            }
        }
    )

    return compose(
        withUser,
        withRouter,
        withLoginRequired
    )
}
