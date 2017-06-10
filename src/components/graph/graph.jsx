/** @jsx h */
import { h, Component } from 'preact'
import Sectors from './sectors.jsx'
import styles from './graph.sass'

const throttle = function (func, delay) {
  let block = false
  let timeoutId

  return function () {
    if (timeoutId) clearTimeout(timeoutId)

    if (block) {
      timeoutId = setTimeout(() => { func() }, delay)
    } else {
      block = true
      setTimeout(() => { block = false }, delay)
      func()
    }
  }
}

export default class Graph extends Component {
  getSize = () => {
    const { width, height } = this.graphElement.getBoundingClientRect()
    this.setState({ width, height })
  }

  componentDidMount () {
    window.addEventListener('resize', throttle(this.getSize, 100))
    this.getSize()
  }

  render ({ class: classNames, axes, valueRange, filterVariation }, { width, height }, { actions }) {
    const values = Object.values(axes).map(axis => axis.value)
    const numberOfAxis = values.length
    const rotationStep = (360 / numberOfAxis)
    const rotationOffset = -90 - 360 / (values.length * 2)
    const rangeSize = valueRange[1] - valueRange[0]

    return <div class={`${styles.graph} ${classNames}`}
      ref={graph => { this.graphElement = graph }}>

      <Sectors values={values} valueRange={valueRange} variation={filterVariation} />

      { Object.entries(axes).map(([axis, { name, value }], index) =>
        <div class={styles.slider}
          style={{
            top: height / 2,
            left: width / 2,
            transform: `rotate(${(index + 1) * rotationStep + rotationOffset}deg)`,
            width: `${(rangeSize / 2) * 10}%`
          }}>

          <input id={axis}
            class={styles[`color-${value}`]}
            type='range'
            value={value}
            min={valueRange[0]}
            max={valueRange[1]}
            step='2'
            onInput={e => {
              actions.setFilterValue({ filterKey: axis, value: e.target.value })
            }} />
          <label for={axis}
            style={{ transform: `rotate(${(index >= numberOfAxis / 2) ? 180 : 0}deg)` }}>
            { name }
          </label>
        </div>
      )}
    </div>
  }
}
