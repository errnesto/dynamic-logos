/** @jsx h */
import { h } from 'preact'
import Graph from '~/components/graph/graph.jsx'
import Logos from '~/components/logos/logos.jsx'
import styles from './overview.sass'

const Overview = ({ axes, filter, filterVariation, examples, selectedExample }) => {
  if (!filter) return null
  return <div>
    <Graph class={styles.graph}
      axes={axes}
      values={selectedExample ? selectedExample.values : filter}
      valueRange={[0, 6]}
      filterVariation={selectedExample ? 0 : filterVariation}
      showSliders={!selectedExample}
      animationSpeed={selectedExample ? 10 : 1} />

    <Logos examples={examples}
      filter={filter}
      filterVariation={filterVariation}
      selectedExample={selectedExample} />
  </div>
}

export default Overview
