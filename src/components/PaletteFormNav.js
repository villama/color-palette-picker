import React, { Component } from 'react'
import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PaletteMetaForm from './PaletteMetaForm'

const drawerWidth = 400

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
    alignItems: 'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    }
  },
  button: {
    margin: '0 0.5rem'
  }
})

class PaletteFormNav extends Component {
  state = {
    newPaletteName: '',
    saveFormShowing: false
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      )
    )
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  showSaveForm = () => {
    this.setState({ saveFormShowing: true })
  }

  render() {
    const { classes, open } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              color='primary'
              onClick={this.showSaveForm}
              className={classes.button}
            >
              Save Palette
            </Button>
          </div>
        </AppBar>
        {this.state.saveFormShowing && (
          <PaletteMetaForm handleSubmit={this.props.handleSubmit} />
        )}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
