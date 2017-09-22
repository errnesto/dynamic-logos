/** @jsx h */
import { h, Component } from 'preact'
import { Link } from 'react-router-dom'
import classNames from './Header.sass'
import TextAnimator from '@components/Header/TextAnimator.jsx'
import Symbology from '@components/Symbology/Symbology.jsx'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state.symbologyIsVisible = false
  }

  words = [
    'Dynamisches Logo System',
    'Verschiebe die Regler',
    'Aktiviere die Achsen',
    'Filtere durch Kategorien',
    'Dynamisches Logo System'
  ]

  toggleSymbology = () => {
    this.setState({ symbologyIsVisible: !this.state.symbologyIsVisible })
  }

  render () {
    return <div class={classNames.header}>
      <h1 class={classNames.title} onClick={() => { window.location = window.location.origin }}>
        <TextAnimator words={this.words} />
      </h1>
      <nav class={classNames.menu}>
        <Link to='/research' class={classNames.menuItem}>Forschung</Link>
        <button type='button' class={classNames.menuItem} onClick={this.toggleSymbology}>
          Legende
        </button>
      </nav>
      { this.state.symbologyIsVisible && <Symbology closeFunction={this.toggleSymbology} /> }
    </div>
  }
}

export default Header
