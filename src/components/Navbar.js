import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    format: 'hex',
    open: false
  }

  handleChangeFormat = e => {
    this.setState({ format: e.target.value }, () => {
      this.setState({ open: true })
      this.props.handleChangeFormat(this.state.format)
    })
  }

  closeSnackbar = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'>colorpalettepicker</Link>
        </div>
        {this.props.level && (
          <div className='slider-container'>
            <span>Level: {this.props.level}</span>
            <div className='slider'>
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                onChange={this.props.changeLevel}
                step={100}
              />
            </div>
          </div>
        )}
        <div className='select-container'>
          <Select onChange={this.handleChangeFormat} value={this.state.format}>
            <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format changed to {this.state.format.toUpperCase()}
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}
