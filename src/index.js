/** @jsx h */
import { h, render, Component } from 'preact'
import Graph from '~/components/graph.jsx'
import store from '~/store.js'

class Index extends Component {
  // provide reference to store actions to all child objects
  getChildContext () { return { actions: store } }

  componentDidMount () { this.unsubscribe = store(state => this.setState(state)) }

  render (props, { axes }) {
    if (!axes) return null
    return <Graph axes={axes} />
  }
}

render(<Index />, document.body)
