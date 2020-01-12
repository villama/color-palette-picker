import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import styles from '../styles/ColorBoxStyles'
import { withStyles } from '@material-ui/styles'

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
            className={`${classes.copyOverlay} ${
              isOverlaying ? classes.showOverlay : undefined
            }`}
            style={{ backgroundColor: background }}
          />
          <div
            className={`${classes.copyMsg} ${
              isOverlaying ? classes.showCopyMsg : undefined
            }`}
          >
            <h1>Copied</h1>
            <p className={classes.copyText}>{background.toUpperCase()}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
