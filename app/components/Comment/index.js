import React from 'react'

export default class Comment extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <p>{this.props.text}</p>
        <span>&mdash; {this.props.author}</span>
      </div>
    )
  }
}
