/** @jsx h */
import { Component, h } from 'preact'
import classNames from './filter.sass'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state.detailsIndex = null
  }

  toggleDetails = (filterIndex) => () => {
    if (this.state.detailsIndex === filterIndex) {
      this.closeDetail()
    } else {
      this.setState({ detailsIndex: filterIndex })
    }
  }

  closeDetail = () => {
    this.setState({ detailsIndex: null })
  }

  handleFilterToggle = ({ filterIndex, optionIndex }) => () => {
    this.context.actions.toggleFilterOtion({ filterIndex, optionIndex })
  }

  render ({ filters }) {
    const detailsIndex = this.state.detailsIndex
    const details = filters[detailsIndex]

    return <div class={classNames.filterComponent}>
      <ul class={classNames.filters}>
        {filters.map((filter, i) => {
          const isActive = i === detailsIndex
          return <li class={`${classNames.filter} ${isActive && classNames.active}`}
            onClick={this.toggleDetails(i)}>
            {filter.title}
          </li>
        })}
      </ul>
      {details &&
        <ul class={classNames.details}>
          <a class={classNames.closeLink} onClick={this.closeDetail}>✕</a>
          {details.options.map((option, optionIndex) =>
            <li class={option.isActive && classNames.active}
              onClick={this.handleFilterToggle(
                { filterIndex: detailsIndex, optionIndex }
              )}>
              {option.title}
            </li>
          )}
        </ul>
      }
    </div>
  }
}

