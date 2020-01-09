import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import PaletteList from './components/PaletteList'

export default class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path='/palette/:pid/:cid'
          render={() => <h1>Single color page</h1>}
        />
      </Switch>
    )
  }
}
