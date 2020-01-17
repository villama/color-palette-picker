import sizes from './sizes'

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    height: '50%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      color: 'white',
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
      transition: '0.25s',
      textDecoration: 'none'
    },
    [sizes.down('lg')]: {
      height: '33.333%',
      width: '25%',
      marginBottom: '-3px'
    },
    [sizes.down('md')]: {
      height: '20%',
      width: '50%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    }
  }
}
