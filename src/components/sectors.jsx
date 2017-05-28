/** @jsx h */
import { h, Component } from 'preact'
import Sector from 'paths-js/sector'

export default class Sectors extends Component {
  static TWO_PI = 2 * Math.PI

  constructor (props) {
    super()
    this.state.values = props.values.map((value, index) =>
                                         value + index * 1 / props.values.length)
  }

  componentDidMount () {
    this.animationMoveOutwards = []
    window.requestAnimationFrame(this.animate)
  }

  animate = (timestamp) => {
    const SPEED = 2000
    const diff = (timestamp - this.lastTimestamp || 0) / SPEED
    this.lastTimestamp = timestamp

    const minValue = this.props.valueRange[0]
    const maxValue = this.props.valueRange[1]
    const animationOffset = this.props.animationOffset

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

  render ({ center }, { values }) {
    const sectors = values.map((value, index) => Sector({
      center: this.props.center,
      r: 0,
      R: value,
      start: Sectors.TWO_PI * index / values.length,
      end: Sectors.TWO_PI * (index + 1) / values.length
    }))

    return <svg width='500' height='500' viewBox='0 0 30 30'>
      {sectors.map(sector =>
        <path d={sector.path.print()} fill='blue' stroke-width='0.1' />
      )}
    </svg>
  }
}
