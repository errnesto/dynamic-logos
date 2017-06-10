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

  render (props, { filter, filterVariation, examples }) {
    if (!filter) return null
    return <div>
      <Graph class={styles.graph}
        axes={filter}
        valueRange={[0, 8]}
        filterVariation={filterVariation} />
      <Logos examples={examples} filter={filter} filterVariation={filterVariation} />
    </div>
  }
}
