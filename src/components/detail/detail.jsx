/** @jsx h */
import { h } from 'preact'
import { Link } from 'react-router-dom'
import Graph from '@components/Graph/Graph.jsx'
import classNames from './Detail.sass'

const Detail = ({ match, examples, axes }) => {
  const id = match.params.id
  const example = examples.find(example => example.id === id)

  return <div>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleWrapperInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h1 class={classNames.title}>
          {example.name} ({example.companyType})<br />
          Agentur: {example.agency}
        </h1>
      </div>
    </div>
    <div class={classNames.content}>
      <div class={classNames.description}>
        <ul class={classNames.tags}>
          <li>{example.industry}</li>
          <li>{example.countries}</li>
          <li>{example.year}</li>
        </ul>
        <Graph class={classNames.graph}
          axes={axes}
          customValues={example.values}
          valueRange={[0, 6]}
          filterVariation={0}
          showInputs={false}
          animationSpeed={1} />
        <p>{example.text}</p>
        <p>
          <a target='_blank' href={example.companyWebsite}>
            {example.companyWebsite}
          </a><br />
          { example.agencyWebsite.map(url =>
            <span><a target='_blank' href={url}>{url}</a><br /></span>)
          }
        </p>
      </div>
      <div class={classNames.graphAndImages}>
        { example.images.map(imageURL =>
          <img class={classNames.image} src={`img/${imageURL}`} />
        )}
      </div>
    </div>
  </div>
}

export default Detail
