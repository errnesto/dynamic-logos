/** @jsx h */
import { h, Component } from 'preact'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from '@components/Header/Header.jsx'
import Overview from '@components/Overview/Overview.jsx'
import Detail from '@components/Detail/Detail.jsx'
import store from '@stores/store.js'
import './index.sass'

export default class Index extends Component {
  // provide reference to store actions to all child objects
  getChildContext () { return { actions: store } }

  componentDidMount () { this.unsubscribe = store(state => this.setState(state)) }

  render (_, state) {
    if (!state.examples) return
    return <Router>
      <div>
        <Header />
        <Route exact path='/' render={() => <Overview {...state} />} />
        <Route exact path='/:id' render={(routeProps) =>
          <Detail {...routeProps} examples={state.examples} axes={state.axes} />} />
      </div>
    </Router>
  }
}
