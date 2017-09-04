/** @jsx h */
import { h } from 'preact'
import { Link } from 'react-router-dom'
import styles from './Logos.sass'
import DynamicImage from './DynamicImage.jsx'

const Logos = ({ examples, selectedExample, filter, filterVariation }, { actions }) => {
  const filteredExamples = examples.filter(example =>
    Object.entries(filter).every(([filterKey, filter]) => {
      if (!filter.isActive) return true

      const value = example.values[filterKey] >= 0 ? example.values[filterKey] : 0
      return value >= filter.value - filterVariation &&
             value <= filter.value + filterVariation
    })
  )

  return <ul class={styles.logos}>
    { filteredExamples.map(example =>
      <li key={example.id}
        onMouseEnter={() => { actions.selectExample(example) }}
        onMouseLeave={actions.deselectExample}>
        <Link to={example.id} class={styles.inner}>
          <h2>{example.name}</h2>
          <DynamicImage images={example.images}
            animateImages={selectedExample && example.id === selectedExample.id} />
        </Link>
      </li>
    )}
  </ul>
}

export default Logos
