import chroma from 'chroma-js'
import sizes from './sizes'

export default {
  ColorBox: {
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    width: '20%', // props => (props.showingFullPalette ? '25%' : '20%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1'
    },
    [sizes.down('lg')]: {
      height: props => (props.showingFullPalette ? '20%' : '33.333%'),
      width: '25%',
      marginBottom: '-3px'
    },
    [sizes.down('md')]: {
      height: props => (props.showingFullPalette ? '10%' : '20%'),
      width: '50%'
    },
    [sizes.down('xs')]: {
      height: props => (props.showingFullPalette ? '5.3%' : '10%'),
      width: '100%',
      marginBottom: '-3.0px'
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() < 0.04 ? 'white' : 'black'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() > 0.85 ? 'black' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    textAlign: 'center',
    fontSize: '1rem',
    cursor: 'pointer',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    opacity: '0',
    transition: '0.25s',
    textDecoration: 'none'
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    zIndex: '-1',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      marginBottom: '0',
      padding: '1rem',
      [sizes.down('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showCopyMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '11',
    transition: 'all 0.2s ease-in-out'
  }
}
