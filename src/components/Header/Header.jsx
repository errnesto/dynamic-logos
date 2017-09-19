/** @jsx h */
import { h } from 'preact'
import { Link } from 'react-router-dom'
import classNames from './Header.sass'
import TextAnimator from '@components/Header/TextAnimator.jsx'

const Header = () => {
  const words = [
    'Dynamisches Logo System',
    'Verschiebe die Regler',
    'Aktiviere die Achsen',
    'Filtere durch Kategorien',
    'Dynamisches Logo System'
  ]

  return <div class={classNames.header}>
    <Link to='/' class={classNames.title}>
      <h1><TextAnimator words={words} /></h1>
    </Link>
    <nav class={classNames.menu}>
      <Link to='/research' class={classNames.menuItem}>Forschung</Link>
      <button type='button' class={classNames.menuItem}>Legende</button>
    </nav>
  </div>
}

export default Header
