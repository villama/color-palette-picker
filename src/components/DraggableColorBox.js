import React from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { SortableElement } from 'react-sortable-hoc'

const styles = {
  root: {
    height: '20%',
    width: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    }
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
}

const DraggableColorBox = SortableElement(props => {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={props.classes.boxContent}>
        <span>{props.name}</span>
        <span>
          <DeleteIcon
            className={props.classes.deleteIcon}
            onClick={props.handleDelete}
          />
        </span>
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)
