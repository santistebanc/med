import React from 'react'
import { withState } from 'recompose'
import styles from '../styles/searchbar.scss'

export default withState('value', 'changeValue', '')(
  ({ value, changeValue, onRequestSearch, onChange }) => (
  <div className={"root"}>

    <form onSubmit={e => {
      e.preventDefault()
      onRequestSearch(value)
    }}>
      <input type="text" placeholder="Buscar" value={value} onChange={e => {
        changeValue(this.value)
        onChange(this.value)
      }} />
    </form>
    <button><i className='fa fa-search' /></button>

    <style jsx>{styles}</style>
  </div >
))