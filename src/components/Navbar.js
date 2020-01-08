import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

export default class Navbar extends Component {
  state = {
    format: 'hex'
  }

  handleChange = e => {
    this.setState({ format: e.target.value }, () => {
      this.props.handleChangeFormat(this.state.format)
    })
  }

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
        <div className='select-container'>
          <Select onChange={this.handleChange} value={this.state.format}>
            <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}
