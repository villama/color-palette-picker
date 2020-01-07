import React from 'react'
import './App.css'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

console.log('genPalette output: ', generatePalette(seedColors[4]))

function App() {
  return (
    <div className='App'>
      <Palette {...seedColors[4]} />
    </div>
  )
}

export default App
