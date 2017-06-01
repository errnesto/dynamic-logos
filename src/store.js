import Hover from 'hover'

const initialState = {
  axes: {
    color: { name: 'Farbe', value: 1 },
    wording: { name: 'Sprache', value: 2 },
    images: { name: 'Bildwelt', value: 6 },
    form: { name: 'Form', value: 8 },
    font: { name: 'Typo', value: 7 },
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
