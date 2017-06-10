import Hover from 'hover'

const initialState = {
  filter: {
    color: { name: 'Farbe', value: 2 },
    wording: { name: 'Sprache', value: 4 },
    images: { name: 'Bildwelt', value: 6 },
    form: { name: 'Form', value: 8 },
    font: { name: 'Typo', value: 6 }
    // orientation: { name: 'Ausrichtung', value: 4 }
  },
  filterVariation: 2,
  examples: [
    {
      id: 1,
      name: 'Pantone Hotel',
      values: {
        color: 2,
        wording: 0,
        images: -1,
        form: 1,
        font: 0
      },
      images: [
        'DI001012_03.png',
        'DI001012_04.png',
        'DI001012_05.png',
        'DI001012_06.png',
        'DI001012_07.png'
      ]
    },
    {
      id: 2,
      name: 'CITY OF MELBOURNE',
      values: {
        color: 1,
        wording: 0,
        images: -1,
        form: 1,
        font: 0
      },
      images: [
        'DI001012_03.png',
        'DI001012_04.png',
        'DI001012_05.png',
        'DI001012_06.png',
        'DI001012_07.png'
      ]
    },
    {
      id: 21,
      name: 'CAPITAL D',
      values: {
        color: 8,
        wording: 0,
        images: 8,
        form: 2,
        font: 0
      },
      images: [
        'DI001012_03.png',
        'DI001012_04.png',
        'DI001012_05.png',
        'DI001012_06.png',
        'DI001012_07.png'
      ]
    }
  ]
}
const actions = {
  setFilterValue: (state, { filterKey, value }) => {
    state.filter[filterKey].value = +value
    return state
  }
}

export default new Hover(actions, initialState)
