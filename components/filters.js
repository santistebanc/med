import React, { Component } from 'react'
import DurationSlider from './duration-slider.js'
import PriceSlider from './price-slider.js'

export default ({ durationFilter, priceFilter, handleChangeDurationSlider, handleChangePriceSlider }) => (
  <div className="root">

    <div className="section">
      <h3>Duración</h3>
      <DurationSlider value={durationFilter} onChange={handleChangeDurationSlider} />
    </div>

    <div className="section">
      <h3>Precio</h3>
      <PriceSlider value={priceFilter} onChange={handleChangePriceSlider} />
    </div>

    <div className="section">
      <h3>Categoria</h3>
      <div>Tag1(numero)</div>
      <div>Tag2(numero)</div>
      <div>Tag3(numero)</div>
      <div>Tag4(numero)</div>
      <div>Ver más +</div>
    </div>

    {/* <style jsx>{styles}</style> */}
  </div>
)