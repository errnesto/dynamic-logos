import Hover from 'hover'
import examples from '@assets/data/logos.json'
import toggleFilters from '@assets/data/toggleFilters.json'

const initialState = {
  axes: {
    color: {
      title: 'Farbe',
      filter: { isActive: false, value: 2 }
    },
    wording: {
      title: 'Text',
      filter: { isActive: false, value: 2 }
    },
    images: {
      title: 'Bildwelt',
      filter: { isActive: false, value: 2 }
    },
    alignment: {
      title: 'Anordnung',
      filter: { isActive: false, value: 2 }
    },
    font: {
      title: 'Typo',
      filter: { isActive: false, value: 2 }
    },
    form: {
      title: 'Form',
      filter: { isActive: false, value: 2 }
    }
  },
  valueRange: [0, 6],
  filterVariation: 1,
  toggleFilters: toggleFilters,
  selectedExample: null,
  examples: examples
}
const actions = {
  setAxisValue: (state, { for: key, to: value }) => {
    const updatedAxes = state.axes
    updatedAxes[key].filter = {
      value: +value,
      isActive: true
    }

    return {
      ...state,
      axes: updatedAxes,
      selectedExample: null
    }
  },

  setAxisActiveState: (state, { for: key, to: activeState }) => {
    const updatedAxes = state.axes
    updatedAxes[key].filter.isActive = activeState

    return {
      ...state,
      axes: updatedAxes,
      selectedExample: null
    }
  },

  toggleFilterOtion: (state, { filterIndex, optionIndex }) => {
    const filter = state.toggleFilters[filterIndex]
    filter.options[optionIndex].isActive = !filter.options[optionIndex].isActive
    return state
  },

  selectExample: (state, example) => ({ ...state, selectedExample: example }),
  deselectExample: (state, example) => ({ ...state, selectedExample: null })
}

export default new Hover(actions, initialState)
