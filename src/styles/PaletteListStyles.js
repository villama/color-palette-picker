import sizes from './sizes'
import bg from './bg.svg'

export default {
  '@global': {
    '.fade-exit': {
      opacity: '1'
    },
    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity 0.5s ease-out'
    }
  },
  root: {
    display: 'flex',
    height: '100vh',
    paddingBottom: '20px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#3d55aa',
    backgroundImage: `url(${bg})` /* background by SVGBackgrounds.com */,
    overflow: 'scroll',
    backgroundAttachment: 'fixed',
    '& h1': {
      fontSize: '2rem'
    }
  },
  container: {
    width: '55%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '60%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)'
    },
    paddingBottom: '50px'
  }
}
