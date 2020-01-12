import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  PaletteFooter: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '1rem'
  }
}

function PaletteFooter(props) {
  return (
    <footer className={props.classes.PaletteFooter}>
      {props.paletteName}
      <span className={props.classes.emoji}>{props.emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
