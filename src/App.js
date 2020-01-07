import React from 'react'
import './App.css'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  const palette = generatePalette(seedColors[4])
  return (
    <div className='App'>
      <Palette palette={palette} />
    </div>
  )
}

export default App
