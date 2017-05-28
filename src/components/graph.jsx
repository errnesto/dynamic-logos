/** @jsx h */
import { h, Component } from 'preact'
import Sectors from '~/components/sectors.jsx'

export default class Graph extends Component {

  render ({ center, axes }, state, { actions }) {
    const values = Object.values(axes).map(axis => axis.value)

    return <div>
      <Sectors center={[15, 15]} values={values} animationRange={1} />
      { Object.entries(axes).map(([axis, { name, value }]) =>
        <div>
          <label for={axis}>{ name }:</label>
          <input id={axis} type='range' value={value} min='0' max='9' step='1'
            onInput={e => { actions.setAxisValue({ axis, value: e.target.value }) }} />
        </div>
      )}
    </div>
  }
}
