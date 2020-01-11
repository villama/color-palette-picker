import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles'

const styles = {
  ColorBox: {
    height: props => (props.showingFullPalette ? '20%' : '50%'),
    width: props => (props.showingFullPalette ? '25%' : '20%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1'
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() < 0.04 ? 'white' : 'black'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    fontSize: '1rem',
    cursor: 'pointer',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    opacity: '0',
    transition: '0.25s',
    textDecoration: 'none'
  }
}

class ColorBox extends Component {
  static defaultProps = {
    showingFullPalette: false
  }
  state = {
    isOverlaying: false
  }

  startOverlay = () => {
    this.setState({ isOverlaying: true }, () => {
      setTimeout(() => this.setState({ isOverlaying: false }), 1500)
    })
  }

  render() {
    const {
      background,
      name,
      id,
      paletteId,
      classes,
      showingFullPalette
    } = this.props
    const { isOverlaying } = this.state

    return (
      <CopyToClipboard
        text={background.toUpperCase()}
        onCopy={this.startOverlay}
      >
        <div
          className={classes.ColorBox}
          style={{ backgroundColor: background }}
        >
          <div
            className={`copy-overlay ${isOverlaying && 'show'}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${isOverlaying && 'show'}`}>
            <h1>Copied</h1>
            <p className={classes.copyText}>{background.toUpperCase()}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
