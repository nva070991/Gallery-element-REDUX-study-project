import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_LOAD, COMMENT_UPDATE } from './types'

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, action) => {
  console.log('comm  reducer>', action)

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      }

      case COMMENT_DELETE:
        const commentDel = state.comments.filter(item => item.id !== action.data.id)
        return {
          ...state,
          comments: commentDel,
        }

    case COMMENT_UPDATE:      
      const commentUP = state.comments.slice(action.data.id-1,1)
      const commentUP1 = state.comments.slice(0, action.data.id-1)
      const commentUP2 = state.comments.slice(action.data.id)

      commentUP.text=action.data.text
      commentUP.id=action.data.id

      return {
        ...state,
        comments: [...commentUP1,commentUP,...commentUP2],
      }


    case COMMENT_LOAD:
      const commentNew = action.data.map((comm) => {
        return {
          text: comm.name,
          id: comm.id,
        }
      })
      return {
        ...state,
        comments: commentNew,
      }

      
    default:
      return state
  }
}
