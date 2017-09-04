/** @jsx h */
import { h } from 'preact'
import mapValues from 'lodash/mapValues'
import Filter from '~/components/filter/filter.jsx'
import Graph from '~/components/graph/graph.jsx'
import Logos from '~/components/logos/logos.jsx'
import styles from './overview.sass'

const Overview = ({ axes, filterVariation, industries, examples, selectedExample }) => {
  return <div>
    <Filter industries={industries} />

    <Graph class={styles.graph}
      axes={axes}
      customValues={selectedExample ? selectedExample.values : {}}
      valueRange={[0, 6]}
      filterVariation={selectedExample ? 0 : filterVariation}
      showInputs={!selectedExample}
      animationSpeed={selectedExample ? 10 : 1} />

    <Logos examples={examples}
      filter={mapValues(axes, axis => axis.filter)}
      filterVariation={filterVariation}
      selectedExample={selectedExample} />
  </div>
}

export default Overview