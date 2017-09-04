/** @jsx h */
import { h } from 'preact'
import styles from './filter.sass'

const Filter = ({ industries }) =>
  <div class={styles.industries}>
    <ul>
      { industries.map(industry =>
        <li class={styles.industry}>{ industry }</li>
      )}
    </ul>
  </div>

export default Filter
