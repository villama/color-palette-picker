import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

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
            <p>{this.props.background.toUpperCase()}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{this.props.name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {this.props.paletteId && (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}
