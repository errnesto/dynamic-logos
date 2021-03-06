/** @jsx h */
import { h, Component } from 'preact'
import Sector from 'paths-js/sector'
import Chroma from 'chroma-js'
import styles from './Sectors.sass'
import { graphColors } from '@lib/colors.sass'
import { range } from '@lib/helpers.js'

export default class Sectors extends Component {
  static TWO_PI = 2 * Math.PI
  static CENTER = [7, 7]

  constructor (props) {
    super()
    this.colorScale = Chroma.scale(graphColors.split(' ')).domain(range(props.valueRange))

    // add some offset to values based on index
    // so they dont move all at the same time
    this.state.variatedValues = props.values.map((value, index) =>
      value === null ? value : value - 1 + index * 0.3)
  }

  componentDidMount () {
    this.animationIsMovingOutwards = []
    window.requestAnimationFrame(this.animate)
  }

  animate = (timestamp) => {
    const REDUCE_SPEED = 1500
    const REDUCE_BOUND_EFFECT = 2
    const minimum = this.props.valueRange[0]
    const maximum = this.props.valueRange[1]
    const variation = this.props.variation
    const speed = REDUCE_SPEED / this.props.animationSpeed

    const step = (timestamp - this.lastTimestamp || 0) / speed
    this.lastTimestamp = timestamp

    const variatedValues = this.state.variatedValues.map((variatedValue, index) => {
      if (this.props.values[index] === null) return null

      const isMovingOutwards = this.animationIsMovingOutwards[index]

      // if the animation moves inwards just invert all the values
      // so we can use the same instructions
      if (!isMovingOutwards) variatedValue *= -1
      const maxValue = isMovingOutwards ? maximum : minimum * -1
      const orgValue = this.props.values[index] >= 0 ? this.props.values[index] : 0
      const value = isMovingOutwards ? orgValue : orgValue * -1

      const maxVariation = Math.min(value + variation, maxValue)
      let leeway = maxVariation - variatedValue + 1
      let newVariatedValue = variatedValue + step * leeway / REDUCE_BOUND_EFFECT

      if (newVariatedValue > maxValue) newVariatedValue = maxValue
      if (newVariatedValue >= maxVariation) {
        this.animationIsMovingOutwards[index] = !isMovingOutwards
        newVariatedValue = variatedValue
      }

      return isMovingOutwards ? newVariatedValue : newVariatedValue * -1
    })

    this.setState({ variatedValues }, () => { window.requestAnimationFrame(this.animate) })
  }

  render ({ valueRange }, { variatedValues }) {
    const parts = variatedValues.map((value, index) => value !== null ? {
      path: Sector({
        center: Sectors.CENTER,
        r: 0,
        R: value,
        start: Sectors.TWO_PI * index / variatedValues.length,
        end: Sectors.TWO_PI * (index + 1) / variatedValues.length
      }).path.print(),
      color: this.colorScale(value)
    } : false).filter(visible => visible)

    return <svg class={styles.sectors} viewBox='0 0 14 14'>
      { range(valueRange).map(value =>
        <circle cx={Sectors.CENTER[0]} cy={Sectors.CENTER[1]}
          r={value}
          fill='none'
          stroke-width='0.06'
          stroke={this.colorScale(value)} />
      )}

      { parts.map(({ path, color }) =>
        <path d={path} fill={color} />
      )}
    </svg>
  }
}
