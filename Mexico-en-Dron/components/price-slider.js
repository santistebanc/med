import React, { Component } from 'react'
import InputRange from 'react-input-range';

export default ({ value, onChange }) => (
  <div className={"green"} style={{ position: 'relative' }}>
    <span style={{ position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }}>{`${value.min} MXN`}</span>
    <span style={{ position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }}>{`${value.max} MXN`}</span>
    <InputRange maxValue={20} minValue={0}
      value={{ min: toSteps(value.min), max: toSteps(value.max) }}
      onChange={(range) => { onChange({ max: toMoney(range.max), min: toMoney(range.min) }) }} formatLabel={val => ``} />
  </div>
)


const toMoney = (value) => value * 5
const toSteps = (money) => money / 5