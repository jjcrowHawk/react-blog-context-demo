import createDataContext from './createDataContext'

//Reducer for blogPost state
const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state,
      {
        id: Math.floor(Math.random() * 999999),
        title: action.payload.title,
        content: action.payload.content
      }]
    case 'DELETE_BLOGPOST':
      return state.filter(post => post.id !== action.payload.id)
    case 'EDIT_BLOGPOST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      })
    default:
      return state
  }
}

//actions for reducer
const addBlogPost = (dispatch) => {
  return (title, content) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: { id } })
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({
          type: 'EDIT_BLOGPOST',
          payload: { id, title, content }
        })
        resolve()
      } catch (error) {
        reject(error)
      }
    })

  }
}

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
)

/* export const BlogProvider = ({ children }) => {

  const [blogPosts, disptach] = useReducer(BlogReducer, [])

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext; */