import React from 'react'
import { connect } from 'react-redux'
import CommentForm from '../../components/CommentForm'
import CommentList from '../../components/CommentList'
import { addComment } from '../../actions/comments'

@connect(state => ({ comments: state.comments }))
export default class App extends React.Component {
  handleFormSubmit (e, data) {
    e.preventDefault()

    const action = addComment({ text: data.get('text'), author: data.get('author') })
    console.log(`ACTION = ${action}`)
    this.props.dispatch(action)
  }

  render () {
    return (
      <section>
        <CommentForm onSubmit={this.handleFormSubmit.bind(this)} />
        <CommentList comments={this.props.comments} />
      </section>
    )
  }
}
