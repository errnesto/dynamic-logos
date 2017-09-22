/** @jsx h */
import { h } from 'preact'
import classNames from './Symbology.sass'

const Symbology = ({closeFunction}) =>
  <div class={classNames.symbology}>
    <a class={classNames.closeLink} onClick={closeFunction} >✕</a>
    <table>
      <tbody>
        <tr>
          <th>Statisch</th>
          <td class={classNames.species}><span>Statisch /<br /> Nicht vorhanden</span></td>
        </tr>
        <tr>
          <th rowSpan='2'>Variiertes<br /> Logo</th>
          <td class={classNames.species}><span>Verzierungen und Masken</span></td>
        </tr>
        <tr>
          <td class={classNames.species}><span>Raster und Regeln</span></td>
        </tr>
        <tr>
          <th rowSpan='2'>Kombiniertes Logo</th>
          <td class={classNames.species}><span>Module und Baukästen</span></td>
        </tr>
        <tr>
          <td class={classNames.species}><span>Permutation</span></td>
        </tr>
        <tr>
          <th rowSpan='2'>Interaktives Logo</th>
          <td class={classNames.species}><span>Generativ durch Daten</span></td>
        </tr>
        <tr>
          <td class={classNames.species}><span>Individualisiert durch Rezipient</span></td>
        </tr>
      </tbody>
    </table>
  </div>

export default Symbology
