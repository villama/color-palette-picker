import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import DialogTitle from '@material-ui/core/DialogTitle'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

class PaletteList extends Component {
  state = {
    openDeleteDialog: false,
    paletteToDelete: null
  }

  openDialog = callback => {
    this.setState({ openDeleteDialog: true, paletteToDelete: callback }, () => {
      console.log(this.state.paletteToDelete)
    })
  }

  closeDialog = () => {
    this.setState({ openDeleteDialog: false })
  }

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`)
  }

  deletePalette = () => {
    this.props.deletePalette(this.state.paletteToDelete)
    this.closeDialog()
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
                  // deletePalette={() => this.props.deletePalette(p.id)}
                  openDeleteDialog={() => this.openDialog(p.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
