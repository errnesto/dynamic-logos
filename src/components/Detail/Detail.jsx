/** @jsx h */
import { h } from 'preact'

const Detail = ({ match, examples }) => {
  const id = match.params.id
  const example = examples.find(example => example.id === id)
  return <div>
    Detail: {example.name}

    { example.images.map(imageURL =>
      <img src={`img/${imageURL}`} />
    )}
  </div>
}

export default Detail
