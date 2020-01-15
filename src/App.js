import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm'

export default class App extends Component {
  state = {
    palettes: seedColors
  }

  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    })
  }

  savePalette = newPalette => {
    console.log(newPalette)
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    })
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/create'
          render={routeProps => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
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
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    )
  }
}
