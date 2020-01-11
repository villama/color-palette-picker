import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'

export default class ColorBox extends Component {
  state = {
    isOverlaying: false
  }

  startOverlay = () => {
    this.setState({ isOverlaying: true }, () => {
      setTimeout(() => this.setState({ isOverlaying: false }), 1500)
    })
  }

  render() {
    // console.log(chroma(this.props.background).luminance())
    const isDarkColor = chroma(this.props.background).luminance() < 0.04
    const isLightColor = chroma(this.props.background).luminance() > 0.85
    return (
      <CopyToClipboard
        text={this.props.background.toUpperCase()}
        onCopy={this.startOverlay}
      >
        <div
          className='ColorBox'
          style={{ backgroundColor: this.props.background }}
        >
          <div
            className={`copy-overlay ${this.state.isOverlaying && 'show'}`}
            style={{ backgroundColor: this.props.background }}
          />
          <div className={`copy-msg ${this.state.isOverlaying && 'show'}`}>
            <h1>Copied</h1>
            <p className={isLightColor && 'dark-text'}>
              {this.props.background.toUpperCase()}
            </p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor && 'light-text'}>
                {this.props.name}
              </span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {this.props.paletteId && (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && 'dark-text'}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}
