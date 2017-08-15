import React, { Component } from 'react'
import InputRange from 'react-input-range';
import { compose, withState, withStateHandlers } from 'recompose'

export default ({ value, onChange }) => (
  <div style={{ position: 'relative' }}>
    <span style={{ position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }}>{getLabel(value.min)}</span>
    <span style={{ position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }}>{getLabel(value.max)}</span>
    <InputRange maxValue={32} minValue={0}
      value={{ min: toSteps(value.min), max: toSteps(value.max) }}
      onChange={(range) => { onChange({ max: toSeconds(range.max), min: toSeconds(range.min) }) }} formatLabel={val => ``} />
  </div>
)


const toSeconds = (value) => value < 10 ? value : value < 20 ? (10 + (value - 10) * 5) : (60 + (parseInt(value) - 20) * 10)
const toSteps = (seconds) => seconds < 10 ? seconds : seconds < 60 ? (10 + (seconds - 10) / 5) : parseInt((seconds - 60) / 10 + 20)
const getLabel = (val) => {
  const minut = parseInt(val / 60)
  const sec = parseInt(val % 60)
  return `${minut}:${sec < 10 ? "0" + sec : sec}`
}