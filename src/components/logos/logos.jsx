/** @jsx h */
import { h } from 'preact'
import styles from './logos.sass'
console.log(styles)

const Logos = ({ examples, filter, filterVariation }, { actions }) => {
  const filteredExamples = examples.filter(example =>
    Object.entries(filter).every(([filterKey, filterValue]) => {
      const value = example.values[filterKey] >= 0 ? example.values[filterKey] : 0
      return value >= filterValue - filterVariation &&
             value <= filterValue + filterVariation
    })
  )

  return <ul class={styles.logos}>
    { filteredExamples.map(example =>
      <li key={example.id}
        onMouseEnter={() => { actions.selectExample(example) }}
        onMouseLeave={actions.deselectExample}>
        <div class={styles.inner}>
          <h2>{example.name}</h2>
          <img src={`img/${example.images[0]}`} />
        </div>
      </li>
    )}
  </ul>
}

export default Logos
