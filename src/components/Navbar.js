import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='/'>colorpalettepicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {this.props.level}</span>
          <div className='slider'>
            <Slider
              defaultValue={this.props.level}
              min={100}
              max={900}
              onChange={this.props.changeLevel}
              step={100}
            />
          </div>
        </div>
      </header>
    )
  }
}
