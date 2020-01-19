import sizes from './sizes'
import chroma from 'chroma-js'

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    color: props =>
      chroma(props.color).luminance() < 0.04
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    // color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    [sizes.down('sm')]: {
      padding: '5px 5px 0px 5px',
      fontSize: '9px'
    }
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
    paddingRight: '15px'
  }
}

export default styles
