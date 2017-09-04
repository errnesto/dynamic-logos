import Hover from 'hover'
import examples from '@assets/data/logos.json'

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
      title: 'Formwahrnehmung',
      filter: { isActive: false, value: 2 }
    }
  },
  industries: [
    'Hotel & Gastronomie',
    'Tourismus',
    'Museum & Kunst',
    'Energie & Umwelt',
    'Pharma & Gesundheit',
    'Handwerk',
    'Veranstaltungen',
    'Theater & Musik',
    'Technik & Telekommunikation',
    'Medien',
    'Beratung & Marketing',
    'Design, Fotografie & Film',
    'Forschung, Bildung & Entwicklung',
    'Architektur & Konstruktion',
    'Finanzen, Versicherungen & Immobilien',
    'Handel',
    'Textil & Bekleidung',
    'Stiftungen & Sozialer / Öffentlicher Dienst'
  ],
  filterVariation: 1,
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
