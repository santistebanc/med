import { withOoth, withUser } from 'ooth-client-react'
import React, { Component } from 'react'
import { compose } from 'recompose'
import withRouter from '../hocs/router'
import styles from '../styles/logout.scss'

export default compose(
  withOoth,
  withUser,
  withRouter,
)(
  class Logout extends Component {
    componentDidMount() {
      if (this.props.user) {
        this.props.oothClient.logout();
      }
    }
    componentDidUpdate() {
      if (!this.props.user) {
        this.props.Router.replace(this.props.next)
      }
    }
    render() {
      return (
        <div className="root">
          <h1>Cierre Sesión</h1>
          {this.props.user && <p>Finalizando Sesión...</p>}
          {!this.props.user && <div><p>Sesión Finalizada</p><a href="/">Ir a Inicio</a></div>}
          <style jsx>{styles}</style>
        </div>
      )
    }
  }
  )