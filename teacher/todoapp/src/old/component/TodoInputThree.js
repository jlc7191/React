import React from 'react'

class TodoInputThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleChange = event => this.setState({ text: event.target.value })

  handleKeyPress = event => {
    this.props.onKeyPress(event)
    if (event.target.value && event.key === 'Enter') {
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

export default TodoInputThree
