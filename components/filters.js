import React from 'react'
import DurationSlider from './duration-slider.js'
import PriceSlider from './price-slider.js'
import withData from '../hocs/data'
import styles from '../styles/Filters.scss'

const mapStateToProps = ({ filters: { durationFilter, priceFilter } }) => ({ durationFilter, priceFilter })

const mapDispatchToProps = (dispatch) => ({
  changeDuration: (min, max) =>
    dispatch({ type: 'CHANGE_DURATION_FILTER', payload: { min, max } }),
  changePrice: (min, max) =>
    dispatch({ type: 'CHANGE_PRICE_FILTER', payload: { min, max } })
})

export default withData(mapStateToProps, mapDispatchToProps)(
  ({ durationFilter, priceFilter, changeDuration, changePrice }) => (
    <div className="root">

      <div className="section">
        <h3>Duración</h3>
        <DurationSlider value={durationFilter} onChange={({ max, min }) => { changeDuration(min, max) }} />
      </div>

      <div className="section">
        <h3>Precio</h3>
        <PriceSlider value={priceFilter} onChange={({ max, min }) => { changePrice(min, max) }} />
      </div>

      <div className="section">
        <h3>Categoria</h3>
        <div>Tag1(numero)</div>
        <div>Tag2(numero)</div>
        <div>Tag3(numero)</div>
        <div>Tag4(numero)</div>
        <div>Ver más +</div>
      </div>

      <style jsx>{styles}</style>
    </div>
  ))