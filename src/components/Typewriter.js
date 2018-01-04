import React, { Component } from 'react'
import Typist from 'react-typist'

class Typewriter extends Component {
  state = {
    typing: true,
    messages: [
      'build websites',
      'love code',
      'drink coffee',
      'enjoy javascript',
      'love react',
      'enjoy ruby'
    ]
  }
  done = () => {
    setTimeout(() => {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true })
      })
    }, 2000)
  }
  render() {
    return this.state.typing
      ? <Typist
          startDelay={1000}
          cursor={{ show: false }}
          onTypingDone={this.done}
        >
          {
            this.state.messages[
              Math.floor(Math.random() * this.state.messages.length)
            ]
          }
        </Typist>
      : null
  }
}

export default Typewriter
