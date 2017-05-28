import Hover from 'hover'

const initialState = {
  axes: {
    a: { name: 'A', value: 1 },
    b: { name: 'B', value: 2 },
    c: { name: 'C', value: 6 },
    d: { name: 'D', value: 9 },
    e: { name: 'E', value: 7 }
  }
}
const actions = {
  setAxisValue: (state, { axis, value }) => {
    state.axes[axis].value = +value
    return state
  }
}

export default new Hover(actions, initialState)
