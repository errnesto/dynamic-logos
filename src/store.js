import Hover from 'hover'
import examples from '~/assets/data/logos.json'

const initialState = {
  axes: {
    color: 'Farbe',
    wording: 'Sprache',
    images: 'Bildwelt',
    form: 'Form',
    font: 'Typo'
  },
  filter: { color: 2, wording: 2, images: 2, form: 2, font: 2 },
  filterVariation: 2,
  selectedExample: null,
  examples: examples
}
const actions = {
  setFilterValue: (state, { filterKey, value }) => {
    state.filter[filterKey] = +value
    const newFilter = state.filter
    return {
      ...state,
      filter: newFilter,
      selectedExample: null
    }
  },

  selectExample: (state, example) => ({ ...state, selectedExample: example }),
  deselectExample: (state, example) => ({ ...state, selectedExample: null })
}

export default new Hover(actions, initialState)
