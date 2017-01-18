import React from 'react'
import Comment from '../Comment'

export default class CommentList extends React.Component {
  static propTypes = { comments: React.PropTypes.array.isRequired }

  render () {
    return (
      <section>
        {this.props.comments.map(comment =>
          <Comment text={comment.text} author={comment.author} />
        )}
      </section>
    )
  }
}
