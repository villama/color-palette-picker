import React, { Component } from 'react'
import './Palette.css'

export default class Palette extends Component {
  render() {
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>{/* Hella color boxes */}</div>
        {/* Footer */}
        <h1>PALETTE</h1>
      </div>
    )
  }
}
