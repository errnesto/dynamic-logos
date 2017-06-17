/** @jsx h */
import { h, Component } from 'preact'

class DynamicImage extends Component {
  constructor (props) {
    super(props)
    this.state.currentIndex = 0
  }

  nextImg = () => {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.props.images.length
    })
  }

  componentWillReceiveProps (nextProps) {
    if (!this.animationIntervall && nextProps.animateImages) {
      this.animationIntervall = window.setInterval(this.nextImg, 150)
    } else {
      window.clearInterval(this.animationIntervall)
      this.animationIntervall = null
    }
  }

  render ({ images, animateImages }, { currentIndex }, { actions }) {
    return <img src={`img/${images[currentIndex]}`} />
  }
}

export default DynamicImage
