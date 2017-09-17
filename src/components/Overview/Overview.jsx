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

  return <div>
    <Filter filters={toggleFilters} />

    <Graph class={styles.graph} axes={axes} values={values} valueRange={valueRange}
      animation={animation} filterInputs={filterInputs} />

    <Logos examples={examples}
      graphFilter={mapValues(axes, axis => axis.filter)}
      toggleFilters={toggleFilters}
      filterVariation={filterVariation}
      selectedExample={selectedExample} />
  </div>
}

export default Overview
