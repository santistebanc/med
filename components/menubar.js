import React from 'react'
import { compose } from 'recompose'
import { withUser } from 'ooth-client-react'
import SearchBar from './searchbar.js'
import withRouter from '../hocs/router'
import withLink from '../hocs/link'
import styles from '../styles/menubar.scss'

export default compose(
  withRouter,
  withLink,
  withUser
)(({ Router, Link, user, url }) => {
  return (
    <div className="root">

      <div className="logo-section">
        <Link prefetch href='/'>
          <div className="logo">
            <img src="/static/MexicoEnDronLogo.png" />
          </div>
        </Link>
      </div>

      <div className="search">
        <SearchBar />
      </div>

      <div className="nav">
        <button onClick={() => {
          user ? Router.push(`/logout`) : url.pathname != "/logout" ? Router.push(`/login?next=${encodeURIComponent(url.pathname)}`) : Router.push(`/login`)
        }}>{user ? "Cerrar Sesión" : "Iniciar Sesión"}</button>
      </div>

      <style jsx>{styles}</style>
    </div>
  )
})