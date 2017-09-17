/** @jsx h */
import { h, Component } from 'preact'
import Sectors from './Sectors.jsx'
import styles from './Graph.sass'
import { throttle } from '@lib/helpers.js'

export default class Graph extends Component {
  getSize = () => {
    const { width, height } = this.graphElement.getBoundingClientRect()
    this.setState({ width, height })
  }

  handleAxisValueChange = (axisKey) => (e) => {
    this.context.actions.setAxisValue({ for: axisKey, to: e.target.value })
  }

  handleToggleFilter = (axisKey) => (e) => {
    this.context.actions.setAxisActiveState({ for: axisKey, to: e.target.checked })
  }

  componentDidMount () {
    window.addEventListener('resize', throttle(this.getSize, 100))
    this.getSize()
  }

  render (props, { width, height }, { actions }) {
    const {
      class: className,
      axes = {},
      values = {},
      valueRange = [0, 1],
      labelFontSize = '12px',
      filterInputs: {
        enabled: inputsAreEnabled = false,
        visible: inputsAreVisible = true
      } = {},
      animation: {
        variation = 0,
        speed: animationSpeed = 1
      } = {}
    } = props

    const axesArray = Object.entries(axes)
      .map(([key, axis]) => ({ key, axis, value: values[key] }))

    const numberOfAxes = axesArray.length
    const rotationStep = (360 / numberOfAxes)
    const rotationOffset = -90 - 360 / (numberOfAxes * 2)
    const rangeSize = valueRange[1] - valueRange[0]

    return <div class={`${styles.graph} ${className}`}
      ref={graph => { this.graphElement = graph }}>

      <Sectors values={axesArray.map(({ value }) => value)} valueRange={valueRange}
        variation={variation} animationSpeed={animationSpeed} />

      { axesArray.map(({ key, axis, value }, index) => {
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

          { inputsAreEnabled && inputsAreVisible &&
            <input id={key}
              class={`${styles.axisSlider} ${styles[`color-${value}`]}`}
              type='range'
              value={axis.filter.value}
              min={valueRange[0]}
              max={valueRange[1]}
              step='1'
              onInput={this.handleAxisValueChange(key)} />
          }

          <div class={styles.labelWrapper} >
            <label for={key} style={{ ...rotatationStyle, fontSize: labelFontSize }}>
              {axis.title}
            </label>
            { inputsAreEnabled &&
              <input type='checkbox'
                checked={axis.filter.isActive}
                class={`${styles.axisCheckbox} ${!inputsAreVisible && styles.invisible}`}
                style={rotatationStyle}
                onChange={this.handleToggleFilter(key)} />
            }
          </div>
        </div>
      })}
    </div>
  }
}
