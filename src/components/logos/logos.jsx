/** @jsx h */
import { h } from 'preact'
// import styles from './logos.sass'

const Logos = ({ examples, filter, filterVariation }, { actions }) => {
  const filteredExamples = examples.filter(example =>
    Object.entries(filter).every(([filterKey, { value: filterValue }]) => {
      const value = example.values[filterKey] >= 0 ? example.values[filterKey] : 0
      return value >= filterValue - filterVariation &&
             value <= filterValue + filterVariation
    })
  )

  return <ul>
    { filteredExamples.map(example =>
      <li key={example.id}>
        <h2>{example.name}</h2>
        <img src={`img/${example.images[0]}`} />
      </li>
    )}
  </ul>
}

export default Logos
