/** @jsx h */
import { h, Component } from 'preact'
import Sector from 'paths-js/sector'
import Chroma from 'chroma-js'

export default class Sectors extends Component {
  static TWO_PI = 2 * Math.PI
  static colorScale = Chroma.scale([
    '#ffffff',
    '#ffe8c3',
    '#ffd283',
    '#e3c25f',
    '#97bc8b',
    '#52aead',
    '#818abf',
    '#6f79ae',
    '#5c689d'
  ]).mode('hsl')

  constructor (props) {
    super()
    // add some offset to values based on index
    // so they dont move all at the same time
    this.state.values = props.values.map((value, index) => value + index * 0.3)
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
    let diff = (timestamp - this.lastTimestamp || 0) / SPEED
    // When in the background browsers won't execude requestAnimationFrame
    // so diff can get pretty big before the animation direction changes
    if (diff > 1) diff = 1
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

  render ({ center, valueRange }, { values }) {
    const parts = values.map((value, index) => ({
      path: Sector({
        center: this.props.center,
        r: 0,
        R: value,
        start: Sectors.TWO_PI * index / values.length,
        end: Sectors.TWO_PI * (index + 1) / values.length
      }).path.print(),
      color: Sectors.colorScale(value / valueRange[1])
    }))

    return <svg width='500' height='500' viewBox='0 0 30 30'>
      {parts.map(({ path, color }) =>
        <path d={path} fill={color} stroke-width='0.07' stroke='white' />
      )}
    </svg>
  }
}
