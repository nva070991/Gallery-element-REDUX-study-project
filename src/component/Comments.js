import { useState, useEffect } from 'react'
import SingleComment from './SingleComment'
import { useDispatch, useSelector } from 'react-redux'
import { commentCreate, commentsLoad, commentUpdate } from '../redux/actions'
import uniqid from 'uniqid'

const Comments = (props) => {
  const [textComment, setTextComment] = useState('')
  const comments = useSelector((state) => {
    const { commentsReducer } = state
    return commentsReducer.comments
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(commentsLoad())
  }, [dispatch])

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()

    dispatch(commentCreate(textComment, id))
  }



  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((comment) => {
          return <SingleComment key={comment.id} data={comment}   />
        })}
    </div>
  )
}




export default Comments
