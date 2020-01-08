import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

export default class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
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
      </Switch>
    )
  }
}
