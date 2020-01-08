import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'

export default class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  }

  changeLevel = level => {
    this.setState({ level })
  }

  changeFormat = format => {
    this.setState({ format })
  }

  render() {
    return (
      <div className='Palette'>
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChangeFormat={this.changeFormat}
        />
        <div className='Palette-colors'>
          {this.props.palette.colors[this.state.level].map(c => (
            <ColorBox
              key={c[this.state.format]}
              background={c[this.state.format]}
              {...c}
            />
          ))}
        </div>
        {/* Footer */}
      </div>
    )
  }
}
