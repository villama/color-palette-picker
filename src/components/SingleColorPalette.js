import React, { Component } from 'react'
import './SingleColorPalette.css'
import './ColorBox'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
// import classes from '*.module.css'

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    height: '50%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      color: 'white',
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
      transition: '0.25s',
      textDecoration: 'none'
    }
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = {
      format: 'hex'
    }
  }

  gatherShades = (palette, colorFilterName) => {
    let shades = []
    let allColors = palette.colors
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilterName)
      )
    }
    return shades.slice(1)
  }

  changeFormat = format => {
    this.setState({ format })
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
      />
    ))
    const { classes } = this.props
    return (
      <div className={classes.Palette}>
        <Navbar handleChangeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${this.props.palette.id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
