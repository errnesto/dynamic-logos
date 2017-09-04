/** @jsx h */
import { h } from 'preact'
import mapValues from 'lodash/mapValues'
import Header from '@components/Header/Header.jsx'
import Graph from '@components/Graph/Graph.jsx'
import Logos from '@components/Logos/Logos.jsx'
import styles from './Overview.sass'

const Overview = ({ axes, filterVariation, industries, examples, selectedExample }) => {
  return <div>
    <Header />

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
