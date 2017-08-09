import React, { Component } from 'react'
import Link from 'next/link'
import SearchBar from './searchbar.js'
import styles from '../styles/menubar.scss'
import Router from 'next/router'

export default class extends Component {
  handleRequestSearch = (query) => {
    console.log("search ", query)
  }
  handleChangeSearch = (algo) => {
    //cada vez que el usuario cambia un caracter
  }
  handleLogin = () => {
    if (this.props.user) {
      Router.push('/logout')
    } else {
      this.props.showSessionModal && this.props.showSessionModal('login')
    }
  }
  render() {
    console.log(this.props.user)
    return (
      <div className="root">

        <div className="logo-section">
          <Link prefetch href='/'><div className="logo">
            <img src="/static/MexicoEnDronLogo.png" />
          </div></Link>
        </div>

        <div className="search">
          <SearchBar onRequestSearch={this.handleRequestSearch} onChange={this.handleChangeSearch} />
        </div>


        <div className="nav">
          <button onClick={this.handleLogin}>{this.props.user ? "Cerrar Sesión" : "Iniciar Sesión"}</button>
        </div>

         <style jsx>{styles}</style> 
      </div>
    );
  }
}