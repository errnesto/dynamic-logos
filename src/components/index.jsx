/** @jsx h */
import { h, Component } from 'preact'
import Graph from '~/components/graph/graph.jsx'
import Logos from '~/components/logos/logos.jsx'
import store from '~/store.js'
import styles from './index.sass'

export default class Index extends Component {
  // provide reference to store actions to all child objects
  getChildContext () { return { actions: store } }

  componentDidMount () { this.unsubscribe = store(state => this.setState(state)) }

  render (props, { axes, filter, filterVariation, examples, selectedExample }) {
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
}
