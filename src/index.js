/** @jsx h */
import { h, render, Component } from 'preact'
import Graph from '~/components/graph.jsx'
import store from '~/store.js'
import styles from '~/index.sass'

class Index extends Component {
  // provide reference to store actions to all child objects
  getChildContext () { return { actions: store } }

  componentDidMount () { this.unsubscribe = store(state => this.setState(state)) }

  render (props, { axes }) {
    if (!axes) return null
    return <Graph class={styles.graph} axes={axes} valueRange={[0,8]} />
  }
}

render(<Index />, document.body)
