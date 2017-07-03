import Hover from 'hover'
import examples from '~/assets/data/logos.json'

const initialState = {
  axes: {
    color: 'Farbe',
    wording: 'Text',
    images: 'Bildwelt',
    alignment: 'Ausrichtung',
    font: 'Typo',
    form: 'Form'
  },
  filter: { color: 3, wording: 3, images: 3, alignment: 3, font: 3, form: 3 },
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
