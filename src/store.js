import Hover from 'hover'
import examples from '~/assets/data/logos.json'

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
      title: 'Ausrichtung',
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
  filterVariation: 2,
  selectedExample: null,
  examples: examples
}
const actions = {
  setFilter: (state, { filterKey, value, isActive = true }) => {
    const updatedAxes = state.axes
    updatedAxes[filterKey].filter = {
      isActive,
      value: +value || state.axes[filterKey].filter.value
    }

    return {
      ...state,
      axes: updatedAxes,
      selectedExample: null
    }
  },

  selectExample: (state, example) => ({ ...state, selectedExample: example }),
  deselectExample: (state, example) => ({ ...state, selectedExample: null })
}

export default new Hover(actions, initialState)
