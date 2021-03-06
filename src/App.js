import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Page from './components/Page'

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
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/create'
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={routeProps =>
                    // TODO: routeProps.match.params.id
                    this.findPalette(routeProps.match.params.id) ? (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    ) : (
                      <Route render={() => <Redirect to='/' />} />
                    )
                  }
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
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route render={() => <Redirect to='/' />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}
