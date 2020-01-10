import React from 'react'
import './PaletteFooter.css'

export default function PaletteFooter(props) {
  return (
    <footer className='Palette-footer'>
      {props.paletteName}
      <span className='emoji'>{props.emoji}</span>
    </footer>
  )
}
