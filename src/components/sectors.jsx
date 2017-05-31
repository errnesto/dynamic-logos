/** @jsx h */
import { h, Component } from 'preact'
import Sector from 'paths-js/sector'
import Chroma from 'chroma-js'

const range = ([ from, to ]) => {
  let range = Array(to - from + 1).fill()
  return range.map((_, i) => from + i)
}

export default class Sectors extends Component {
  static TWO_PI = 2 * Math.PI

  constructor (props) {
    super()
    this.colorScale = Chroma.scale([
      'FFFFFF',
      'FEF5E2',
      'FED89A',
      'FEC349',
      '86D0CB',
      '38B7A8',
      '828BBF',
      '46558B',
      '29255C'
    ]).domain(range(props.valueRange))

    // add some offset to values based on index
    // so they dont move all at the same time
    this.state.values = props.values.map((value, index) => value - 1 + index * 0.3)
  }

  componentDidMount () {
    this.animationMoveOutwards = []
    window.requestAnimationFrame(this.animate)
  }

  animate = (timestamp) => {
    const SPEED = 2000
    const minValue = this.props.valueRange[0]
    const maxValue = this.props.valueRange[1]
    const animationOffset = this.props.animationOffset
    const diff = (timestamp - this.lastTimestamp || 0) / SPEED
    this.lastTimestamp = timestamp

    const values = this.state.values.map((value, index) => {
      let offset
      if (this.animationMoveOutwards[index]) {
        const ciel = Math.min(this.props.values[index] + animationOffset, maxValue)
        const missing = ciel - value
        const isFarAway = missing > animationOffset * 2
        offset = isFarAway ? diff * (missing + 1) : diff
        if (missing <= 0) this.animationMoveOutwards[index] = false
      } else {
        const floor = Math.max(this.props.values[index] - animationOffset, minValue)
        const missing = value - floor
        const isFarAway = missing > animationOffset * 2
        offset = isFarAway ? diff * (missing + 1) * -1 : diff * -1
        if (missing <= 0) this.animationMoveOutwards[index] = true
      }
      return value + offset
    })
    this.setState({ values }, () => { window.requestAnimationFrame(this.animate) })
  }

  render ({ center, values, valueRange }, { values: animatedValues }) {
    const parts = animatedValues.map((value, index) => ({
      path: Sector({
        center: center,
        r: 0,
        R: value,
        start: Sectors.TWO_PI * index / animatedValues.length,
        end: Sectors.TWO_PI * (index + 1) / animatedValues.length
      }).path.print(),
      color: this.colorScale(value)
    }))

    return <svg width='500' height='500' viewBox='0 0 30 30'>
      { range(valueRange).map(value =>
        <circle cx={center[0]} cy={center[1]}
          r={value}
          fill='none'
          stroke-width='0.06'
          stroke={this.colorScale(value)} />
      )}

      { parts.map(({ path, color }) =>
        <path d={path} fill={color} stroke-width='0.06' stroke='white' />
      )}
    </svg>
  }
}
