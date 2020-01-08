import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  const palette = generatePalette(seedColors[4])
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path='/palette/:id'
        render={() => <h1>Individual palette</h1>}
      />
    </Switch>
    // <div className='App'>
    //   <Palette palette={palette} />
    // </div>
  )
}

export default App
