/** @jsx h */
import { h } from 'preact'
import Graph from '@components/Graph/Graph.jsx'
import classNames from './GraphList.sass'

const GraphList = ({ examples, axes, valueRange }) =>
  <ul>
    {examples.map(example =>
      <li class={classNames.example}>
        <h2>{example.name}</h2>
        <Graph class={classNames.graph} axes={axes} values={example.values}
          valueRange={valueRange} labelFontSize='8px' />
      </li>
    )}
  </ul>

export default GraphList
