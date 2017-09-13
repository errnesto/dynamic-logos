/** @jsx h */
import { h } from 'preact'
import mapValues from 'lodash/mapValues'
import Filter from '@components/Filter/Filter.jsx'
import Graph from '@components/Graph/Graph.jsx'
import Logos from '@components/Logos/Logos.jsx'
import styles from './Overview.sass'

const Overview = ({ axes, filterVariation, examples, selectedExample, toggleFilters }) => {
  return <div>
    <Filter filters={toggleFilters} />

    <Graph class={styles.graph}
      axes={axes}
      customValues={selectedExample ? selectedExample.values : {}}
      valueRange={[0, 6]}
      filterVariation={selectedExample ? 0 : filterVariation}
      showInputs={!selectedExample}
      animationSpeed={selectedExample ? 10 : 1} />

    <Logos examples={examples}
      graphFilter={mapValues(axes, axis => axis.filter)}
      toggleFilters={toggleFilters}
      filterVariation={filterVariation}
      selectedExample={selectedExample} />
  </div>
}

export default Overview
