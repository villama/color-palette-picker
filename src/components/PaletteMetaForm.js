import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      newPaletteName: '',
      stage: 'naming'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' })
  }

  savePalette = emoji => {
    this.props.handleSubmit(this.state.newPaletteName, emoji.native)
    this.setState({ stage: '' })
  }

  render() {
    const { newPaletteName } = this.state

    return (
      <div>
        <Dialog
          open={this.state.stage === 'emoji'}
          onClose={this.props.hideSaveForm}
        >
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Emoji
          </DialogTitle>
          <Picker
            onSelect={this.savePalette}
            title=''
            emoji=''
            showSkinTones={false}
          />
        </Dialog>
        <Dialog
          open={this.state.stage === 'naming'}
          onClose={this.props.hideSaveForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a unique name for your new palette.
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                value={newPaletteName}
                name='newPaletteName'
                onChange={this.handleChange}
                fullWidth
                margin='normal'
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name', 'Name already used']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.hideSaveForm} color='primary'>
                Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    )
  }
}
export default PaletteMetaForm
