import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  colorNameInput: {
    width: '100%',
    height: '70px'
  }
}

class ColorPickerForm extends Component {
  state = {
    currentColor: 'teal',
    newColorName: ''
  }

  handleColorChange = color => {
    const rgba = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    this.setState({ currentColor: rgba })
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor
    }
    this.props.addNewColor(newColor)
    this.setState({
      newColorName: ''
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChange={this.handleColorChange}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            placeholder='Color Name'
            className={classes.colorNameInput}
            name='newColorName'
            variant='filled'
            value={this.state.newColorName}
            onChange={this.handleChange}
            margin='normal'
            validators={['required', 'isColorNameUnique']}
            errorMessages={[
              'This field is required',
              'Color name must be unique'
            ]}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.addColor}
            style={
              this.props.isPaletteFull
                ? {}
                : {
                    backgroundColor: this.state.currentColor
                  }
            }
            type='submit'
            disabled={this.props.isPaletteFull}
          >
            {this.props.isPaletteFull ? 'Palette full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm)
