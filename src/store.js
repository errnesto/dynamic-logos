import Hover from 'hover'
import examples from '~/assets/data/logos.json'

const initialState = {
  filter: {
    color: { name: 'Farbe', value: 2 },
    wording: { name: 'Sprache', value: 2 },
    images: { name: 'Bildwelt', value: 2 },
    form: { name: 'Form', value: 2 },
    font: { name: 'Typo', value: 2 }
    // orientation: { name: 'Ausrichtung', value: 4 }
  },
  filterVariation: 2,
  examples: examples
}
const actions = {
  setFilterValue: (state, { filterKey, value }) => {
    state.filter[filterKey].value = +value
    return state
  }
}

export default new Hover(actions, initialState)
