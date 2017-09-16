/** @jsx h */
import { h } from 'preact'
import Graph from '@components/Graph/Graph.jsx'
import classNames from './GraphList.sass'

const GraphList = ({ examples, axes }) =>
  <ul>
    {examples.map(example =>
      <li class={classNames.example}>
        <h2>{example.name}</h2>
        <Graph class={classNames.graph}
          axes={axes}
          customValues={example.values}
          valueRange={[0, 6]}
          filterVariation={0}
          showInputs={false}
          animationSpeed={1} />
      </li>
    )}
  </ul>

export default GraphList
