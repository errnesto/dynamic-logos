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

  handleAxisValueChange = (axisKey) => (e) => {
    this.context.actions.setFilter({ filterKey: axisKey, value: e.target.value })
  }

  handleToggleFilter = (axisKey) => (e) => {
    this.context.actions.setFilter({ filterKey: axisKey, isActive: e.target.checked })
  }

  componentDidMount () {
    window.addEventListener('resize', throttle(this.getSize, 100))
    this.getSize()
  }

  render ({ class: classNames, axes, customValues, valueRange, filterVariation, showInputs, animationSpeed },
          { width, height },
          { actions }) {
    const axesArray = Object.entries(axes)
    const values = axesArray.map(([key, axis]) => customValues[key] || axis.filter.value)
    const numberOfAxes = axesArray.length
    const rotationStep = (360 / numberOfAxes)
    const rotationOffset = -90 - 360 / (numberOfAxes * 2)
    const rangeSize = valueRange[1] - valueRange[0]

    return <div class={`${styles.graph} ${classNames}`}
      ref={graph => { this.graphElement = graph }}>

      <Sectors values={values}
        valueRange={valueRange}
        variation={filterVariation}
        animationSpeed={animationSpeed} />

      { axesArray.map(([key, axis], index) => {
        const value = values[index]
        const rotatationStyle = {
          transform: `rotate(${(index >= numberOfAxes / 2) ? 180 : 0}deg)`
        }

        return <div class={styles.slider}
          style={{
            top: height / 2,
            left: width / 2,
            transform: `rotate(${(index + 1) * rotationStep + rotationOffset}deg)`,
            width: `${(rangeSize / 2) * 14}%`
          }}>

          { showInputs && <input id={axis}
            class={`${styles.axisSlider} ${styles[`color-${value}`]}`}
            type='range'
            value={value}
            min={valueRange[0]}
            max={valueRange[1]}
            step='1'
            onInput={this.handleAxisValueChange(key)} /> }
          <div class={styles.labelWrapper} >
            <label for={axis} style={rotatationStyle}>{ axis.title }</label>
            { showInputs &&
              <input type='checkbox'
                checked={axis.filter.isActive}
                class={styles.axisCheckbox}
                style={rotatationStyle}
                onChange={this.handleToggleFilter(key)} />
            }
          </div>

        </div>
      })}
    </div>
  }
}
