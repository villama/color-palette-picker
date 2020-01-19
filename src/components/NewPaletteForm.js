import React, { Component } from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button'
import { ValidatorForm } from 'react-material-ui-form-validator'
import DraggableColorList from './DraggableColorList'
import { arrayMove } from 'react-sortable-hoc'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import styles from '../styles/NewPaletteFormStyles'
import seedColors from '../seedColors'

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }

  state = {
    open: true,
    currentColor: 'teal',
    colors: seedColors[0].colors
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.state.colors.every(
        color => value.toLowerCase() !== color.name.toLowerCase()
      )
    )
    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.state.colors.every(
        color => this.state.currentColor !== color.color.toLowerCase()
      )
    )
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  addNewColor = newColor => {
    this.setState(st => ({
      colors: [...st.colors, newColor],
      newColorName: ''
    }))
  }

  addRandomColor = () => {
    const allColors = this.props.palettes.map(p => p.colors).flat()
    let randIdx = Math.floor(Math.random() * allColors.length)
    this.setState({
      colors: [...this.state.colors, allColors[randIdx]]
    })
  }

  clearColors = () => {
    this.setState({ colors: [] })
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = (newPaletteName, newPaletteEmoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: newPaletteEmoji,
      colors: this.state.colors
    }

    this.props.savePalette(newPalette)
    this.props.history.push('/')
  }

  deleteColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }))
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    const isPaletteFull = this.state.colors.length >= this.props.maxColors

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={this.props.palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={this.state.colors}
            deleteColor={this.deleteColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
            distance={10}
          />
        </main>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm)
