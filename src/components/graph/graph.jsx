/** @jsx h */
import { h, Component } from 'preact'
import Sectors from './sectors.jsx'
import styles from './graph.sass'
import { throttle } from '~/lib/helpers.js'

export default class Graph extends Component {
  getSize = () => {
    const { width, height } = this.graphElement.getBoundingClientRect()
    this.setState({ width, height })
  }

  componentDidMount () {
    window.addEventListener('resize', throttle(this.getSize, 100))
    this.getSize()
  }

  render ({ class: classNames, axes, values, valueRange, filterVariation, showSliders, animationSpeed },
          { width, height },
          { actions }) {
    const valuePairs = Object.entries(values)
    const fixValues = valuePairs.map(([, value]) => value)
    const numberOfAxis = fixValues.length
    const rotationStep = (360 / numberOfAxis)
    const rotationOffset = -90 - 360 / (fixValues.length * 2)
    const rangeSize = valueRange[1] - valueRange[0]

    return <div class={`${styles.graph} ${classNames}`}
      ref={graph => { this.graphElement = graph }}>

      <Sectors values={fixValues}
        valueRange={valueRange}
        variation={filterVariation}
        animationSpeed={animationSpeed} />

      { valuePairs.map(([axis, value], index) =>
        <div class={styles.slider}
          style={{
            top: height / 2,
            left: width / 2,
            transform: `rotate(${(index + 1) * rotationStep + rotationOffset}deg)`,
            width: `${(rangeSize / 2) * 14}%`
          }}>

          { showSliders && <input id={axis}
            class={`${styles[`color-${value}`]}`}
            type='range'
            value={value}
            min={valueRange[0]}
            max={valueRange[1]}
            step='1'
            onInput={e => {
              actions.setFilterValue({ filterKey: axis, value: e.target.value })
            }} /> }
          <label for={axis}
            style={{ transform: `rotate(${(index >= numberOfAxis / 2) ? 180 : 0}deg)` }}>
            { axes[axis] }
          </label>
        </div>
      )}
    </div>
  }
}
