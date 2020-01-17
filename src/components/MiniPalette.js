import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

function MiniPalette(props) {
  const { classes } = props
  const miniColorBoxes = props.colors.map(c => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: c.color }}
      key={c.name}
    />
  ))

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {props.paletteName} <span className={classes.emoji}>{props.emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
