'use strict'
import { Component } from 'preact'

let intervalID, timeoutId

export default class TextAnimator extends Component {
  constructor (props) {
    super(props)
    this.state = { buzzword: props.words[0] }
  }

  animateTyping ({ word, backwards = false }) {
    let remainingChars = word.length

    return new Promise(resolve => {
      intervalID = setInterval(() => {
        let charecterOffset = --remainingChars
        if (!backwards) {
          charecterOffset *= -1
          if (charecterOffset === 0) charecterOffset = word.length
        }
        this.setState({ buzzword: word.slice(0, charecterOffset) })
        if (remainingChars === 0) {
          clearInterval(intervalID)
          resolve()
        }
      }, backwards ? 50 : 150)
    })
  }

  componentDidMount () {
    const replaceWord = (i = 0) => {
      this.animateTyping({ word: this.props.words[i], backwards: true })
      .then(() => this.animateTyping({ word: this.props.words[++i] }))
      .then(() => {
        if (i < this.props.words.length - 1) {
          timeoutId = setTimeout(() => { replaceWord(i) }, 3000)
        }
      })
    }
    timeoutId = setTimeout(replaceWord, 1000)
  }

  componentWillUnmount () {
    clearInterval(intervalID)
    clearTimeout(timeoutId)
  }

  render ({ buzzwords }) {
    return this.state.buzzword
  }
}
