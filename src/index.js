/** @jsx h */
import { h, render } from 'preact'
import Graph from './components/graph.jsx'

render(
  <Graph center={[15, 15]} values={[1, 2, 6, 9, 7]} animationRange={1} />,
  document.body
)
