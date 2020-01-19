import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    const savedPalettes = JSON.parse(
      window.localStorage.getItem('palettes') || '[]'
    )

    this.state = {
      palettes: savedPalettes.length > 0 ? savedPalettes : seedColors
    }
  }

  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    })
  }

  savePalette = newPalette => {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette]
      },
      this.syncLocalStorage
    )
  }

  deletePalette = paletteId => {
    this.setState(
      {
        palettes: this.state.palettes.filter(
          palette => palette.id !== paletteId
        )
      },
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/create'
                  render={routeProps => (
                    <div className='page'>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <div className='page'>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={routeProps => (
                    <div className='page'>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  path='/palette/:paletteId/:colorId'
                  render={routeProps => (
                    <div className='page'>
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}
