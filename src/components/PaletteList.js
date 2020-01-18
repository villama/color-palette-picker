import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Palette Picker</h1>
            <Link to='/palette/create'>Create New Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(p => (
              <CSSTransition key={p.id} classNames='fade' timeout={500}>
                <MiniPalette
                  {...p}
                  handleClick={() => this.goToPalette(p.id)}
                  deletePalette={() => this.props.deletePalette(p.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
