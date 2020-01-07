import chroma from 'chroma-js'
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalette(starterPalette) {
  let outputPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  }

  // Set an array of levels
  for (let level of levels) {
    outputPalette.colors[level] = []
  }

  // Loop over colors
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse()
    for (let i in scale) {
      outputPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      })
    }
  }

  return outputPalette
}

function generateScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors)
}

function getRange(hexColor) {
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    '#fff'
  ]
}

export { generatePalette }
