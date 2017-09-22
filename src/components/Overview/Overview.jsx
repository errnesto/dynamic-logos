/** @jsx h */
import { h } from 'preact'
import mapValues from 'lodash/mapValues'
import Filter from '@components/Filter/Filter.jsx'
import Graph from '@components/Graph/Graph.jsx'
import Logos from '@components/Logos/Logos.jsx'
import styles from './Overview.sass'

const Overview = ({ axes, valueRange, filterVariation, examples, selectedExample, toggleFilters }) => {
  const values = selectedExample
    ? selectedExample.values
    : mapValues(axes, axis => axis.filter.isActive ? axis.filter.value : null)

  const animation = {
    speed: selectedExample ? 10 : 1,
    variation: selectedExample ? 0 : filterVariation
  }
  const filterInputs = {
    enabled: true,
    visible: !selectedExample
  }
  const graphFilter = mapValues(axes, axis => axis.filter)

  const filteredExamples = examples.filter(example =>
    toggleFilters.every(filter => filter.options.some(({ title, isActive }) =>
      isActive && example[filter.key] === title)
    ) &&
    Object.entries(graphFilter).every(([filterKey, filter]) => {
      if (!filter.isActive) return true

      const value = example.values[filterKey] >= 0 ? example.values[filterKey] : 0
      return value >= filter.value - filterVariation &&
             value <= filter.value + filterVariation
    })
  )

  return <div>
    <Filter filters={toggleFilters} numberOfResults={filteredExamples.length} />

    <Graph class={styles.graph} axes={axes} values={values} valueRange={valueRange}
      animation={animation} filterInputs={filterInputs} />

    <Logos examples={filteredExamples}
      graphFilter={graphFilter}
      toggleFilters={toggleFilters}
      filterVariation={filterVariation}
      selectedExample={selectedExample} />
  </div>
}

export default Overview
