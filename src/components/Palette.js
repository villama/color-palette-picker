import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Palette.css'

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
        <div className='slider'>
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            onChange={this.changeLevel}
            step={100}
            // handleStyle={{ backgroundColor: 'green', outline: 'none' }}
          />
        </div>
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
