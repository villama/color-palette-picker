import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import Navbar from './Navbar'

export default class Palette extends Component {
  state = {
    level: 500
  }

  changeLevel = level => {
    this.setState({ level })
  }

  render() {
    return (
      <div className='Palette'>
        <Navbar level={this.state.level} changeLevel={this.changeLevel} />
        <div className='Palette-colors'>
          {this.props.palette.colors[this.state.level].map(c => (
            <ColorBox key={c.hex} {...c} />
          ))}
        </div>
        {/* Footer */}
      </div>
    )
  }
}
