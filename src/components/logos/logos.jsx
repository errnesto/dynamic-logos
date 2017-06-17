/** @jsx h */
import { h } from 'preact'
import styles from './logos.sass'
import DynamicImage from './dynamicImage.jsx'

const Logos = ({ examples, selectedExample, filter, filterVariation }, { actions }) => {
  const filteredExamples = examples.filter(example =>
    Object.entries(filter).every(([filterKey, filterValue]) => {
      const value = example.values[filterKey]
      return (value >= filterValue - filterVariation &&
             value <= filterValue + filterVariation) ||
             value === -1
    })
  )

  return <ul class={styles.logos}>
    { filteredExamples.map(example =>
      <li key={example.id}
        onMouseEnter={() => { actions.selectExample(example) }}
        onMouseLeave={actions.deselectExample}>
        <div class={styles.inner}>
          <h2>{example.name}</h2>
          <DynamicImage images={example.images}
            animateImages={selectedExample && example.id === selectedExample.id} />
        </div>
      </li>
    )}
  </ul>
}

export default Logos
