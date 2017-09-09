import React from 'react'
import { compose } from 'recompose'
import { withUser } from 'ooth-client-react'
import withRouter from '../hocs/router'
import withLink from '../hocs/link'
import styles from '../styles/navigation.scss'

export default compose(
  withRouter,
  withLink,
  withUser
)(({ Router, Link, user }) => (
  <div className="root">
    <button id="gallery" onClick={() => { Router.push('/gallery') }}>Galería</button>
    <button id="myvideos" onClick={() => { Router.push('/dashboard') }}>Mis Videos</button>
    <button id="account" onClick={() => { Router.push('/account') }}>Cuenta</button>
    {user && <button id="admin" onClick={() => { Router.push('/admin') }}>Admin</button>}

    <style jsx>{styles}</style>
  </div >
))