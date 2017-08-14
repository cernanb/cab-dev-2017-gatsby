import React, { Component } from 'react'
import Typist from 'react-typist'

class Typewriter extends Component {
  state = {
    typing: true,
    message: 'build websites'
  }
  done = () => {
    setTimeout(() => {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true, message: 'drink coffee' })
      });
    }, 2000)
  }
  render() {
    return (
      this.state.typing
      ? <Typist startDelay={1000} cursor={{show: false}} onTypingDone={this.done}>{this.state.message}</Typist>
      : null
    )
  }
}

export default Typewriter