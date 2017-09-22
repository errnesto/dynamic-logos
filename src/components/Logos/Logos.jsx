/** @jsx h */
import { h } from 'preact'
import { Link } from 'react-router-dom'
import classNames from './Logos.sass'
import DynamicImage from './DynamicImage.jsx'

const Logos = ({ examples, selectedExample, graphFilter, toggleFilters, filterVariation },
  { actions }) => {
  return <ul class={classNames.logos}>
    { examples.map(example =>
      <li key={example.id}
        onMouseEnter={() => { actions.selectExample(example) }}
        onMouseLeave={actions.deselectExample}>
        <Link to={`detail/${example.id}`} class={classNames.inner}>
          <h2>{example.name}</h2>
          <DynamicImage images={example.images}
            animateImages={selectedExample && example.id === selectedExample.id} />
        </Link>
      </li>
    )}
    <li class={classNames.callToAction}>
      <a href='mailto:dynamischelogos@wunderundfitzig.de'>
        Dynamisches<br /> Logo<br /> einreichen
      </a>
    </li>
    {Array(5).fill('').map(_ =>
      <li class={classNames.ghostItem}></li>)
    }
  </ul>
}

export default Logos
