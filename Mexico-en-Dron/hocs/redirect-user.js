import React, { Component } from 'react'
import { withUser } from 'ooth-client-react'
import withRouter from './router'
import { compose } from 'recompose'

export default (C) => {
  class Redirect extends Component {
    componentDidMount() {
      if (this.props.user) {
        this.props.Router.push(this.props.next || '/gallery')
      }
    }
    componentDidUpdate() {
      if (this.props.user) {
        this.props.Router.push(this.props.next || '/gallery')
      }
    }
    render() {
      if (this.props.user) {
        return <div style={{
          maxWidth: '300px',
          margin: 'auto'
        }}>
          <p>Ya tienes una sesión de usuario iniciada.</p>
          <p>Haz click <a href={this.props.next || '/gallery'}>aquí</a> si la página no se redirecciona automáticamente.</p>
        </div>
      } else {
        return <C {...this.props} />
      }
    }
  }
  return compose(
    withUser,
    withRouter
  )(Redirect)
}