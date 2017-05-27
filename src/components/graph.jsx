/** @jsx h */
import { h, Component } from 'preact'
import Sector from 'paths-js/sector'

const bounceBetweenOneAndZero = (num) => {
  const isEven = Math.floor(num) % 2 === 0
  const rest = num % 1
  return isEven ? 0 + rest : 1 - rest
}

export default class Graph extends Component {
  static TWO_PI = 2 * Math.PI

  constructor (props) {
    super()
    this.state.values = props.values
  }

  componentDidMount () {
    window.requestAnimationFrame(this.animate)
  }

  animate = (timestamp) => {
    const offset = 0.3
    if (!this.animationStart) this.animationStart = timestamp
    const diff = (timestamp - this.animationStart) / 2000
    const values = this.props.values.map((value, index) =>
      value + bounceBetweenOneAndZero(diff + index * offset) * 2)
    this.setState({ values }, () => { window.requestAnimationFrame(this.animate) })
  }

  render ({ center }, { values }) {
    const sectors = values.map((value, index) => Sector({
      center: this.props.center,
      r: 0,
      R: value,
      start: Graph.TWO_PI * index / values.length,
      end: Graph.TWO_PI * (index + 1) / values.length
    }))

    return <svg width='500' height='500' viewBox='0 0 30 30'>
      {sectors.map(sector =>
        <path d={sector.path.print()} fill='blue' stroke-width='0.1' />
      )}
    </svg>
  }
}
