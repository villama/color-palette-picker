import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import styles from '../styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'

class Palette extends Component {
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
    const { classes } = this.props
    return (
      <div className={classes.Palette}>
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChangeFormat={this.changeFormat}
        />
        <div className={classes.colors}>
          {this.props.palette.colors[this.state.level].map(c => (
            <ColorBox
              key={c.id}
              background={c[this.state.format]}
              {...c}
              id={c.id}
              paletteId={this.props.palette.id}
              showingFullPalette
            />
          ))}
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Palette)
