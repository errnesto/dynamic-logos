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
      title: 'Form',
      filter: { isActive: false, value: 2 }
    }
  },
  valueRange: [0, 6],
  filterVariation: 1,
  toggleFilters: [
    {
      title: 'Branche',
      key: 'industry',
      options: [
        { title: 'Hotel & Gastronomie', isActive: true },
        { title: 'Tourismus', isActive: true },
        { title: 'Museum & Kunst', isActive: true },
        { title: 'Energie & Umwelt', isActive: true },
        { title: 'Pharma & Gesundheit', isActive: true },
        { title: 'Handwerk', isActive: true },
        { title: 'Veranstaltungen', isActive: true },
        { title: 'Theater & Musik', isActive: true },
        { title: 'Technik & Telekommunikation', isActive: true },
        { title: 'Medien', isActive: true },
        { title: 'Beratung & Marketing', isActive: true },
        { title: 'Design, Fotografie & Film', isActive: true },
        { title: 'Forschung, Bildung & Entwicklung', isActive: true },
        { title: 'Architektur & Konstruktion', isActive: true },
        { title: 'Finanzen, Versicherungen & Immobilien', isActive: true },
        { title: 'Handel', isActive: true },
        { title: 'Textil & Bekleidung', isActive: true },
        { title: 'Stiftungen & Sozialer / Öffentlicher Dienst', isActive: true }
      ]
    },
    {
      title: 'Jahr',
      key: 'year',
      options: [
        { title: '2008', isActive: true },
        { title: '2009', isActive: true },
        { title: '2010', isActive: true }
      ]
    }
  ],
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
