import React from 'react'

export default class CommentForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func
  }

  static defaultProps = {
    onSubmit () {}
  }

  handleSubmit (e) {
    const data = new FormData(this.form)
    this.props.onSubmit(e, data)
  }

  render () {
    return (
      <form ref={e => this.form = e} onSubmit={this.handleSubmit.bind(this)}>
        <textarea name="text" />
        <input type="text" name="author" />
        <button>Submit Comment</button>
      </form>
    )
  }
}
