import { useState, useEffect } from 'react'
import {commentDelete, commentUpdate } from '../redux/actions'
import { useDispatch } from 'react-redux'



const SingleComment = ({data}) => {
  const [commentText, setCommentText] = useState('')

  const { text, id } = data

  const dispatch = useDispatch()


  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const handleDelete = () => {
    dispatch(commentDelete(id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
    
    
  }

  return (
    <form onSubmit={handleSubmit} className="comments-item ">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  )
}




export default SingleComment
