import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent {
  deletePalette = evt => {
    evt.stopPropagation()
    this.props.openDeleteDialog(this.props.id)
  }

  render() {
    console.log(`RENDERING ${this.props.paletteName}`)
    const { classes } = this.props
    const miniColorBoxes = this.props.colors.map(c => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: c.color }}
        key={c.name}
      />
    ))
    return (
      <div
        className={classes.root}
        onClick={() => this.props.handleClick(this.props.id)}
      >
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {this.props.paletteName}{' '}
          <span className={classes.emoji}>{this.props.emoji}</span>
        </h5>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette)
