import Hover from 'hover'

const initialState = {
  axes: {
    color: { name: 'Farbe', value: 2 },
    wording: { name: 'Sprache', value: 4 },
    images: { name: 'Bildwelt', value: 6 },
    form: { name: 'Form', value: 8 },
    font: { name: 'Typo', value: 6 },
    orientation: { name: 'Ausrichtung', value: 4 }
  }
}
const actions = {
  setAxisValue: (state, { axis, value }) => {
    state.axes[axis].value = +value
    return state
  }
}

export default new Hover(actions, initialState)
