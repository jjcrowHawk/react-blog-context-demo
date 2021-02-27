import createDataContext from './createDataContext'

//Reducer for blogPost state
const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { id: Math.floor(Math.random() * 999999), title: `Blog Post # ${state.length + 1}` }]
    case 'DELETE_BLOGPOST':
      return state.filter(post => post.id !== action.payload.id)
    default:
      return state
  }
}

//actions for reducer
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: { id } })
  }
}

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost },
  []
)

/* export const BlogProvider = ({ children }) => {

  const [blogPosts, disptach] = useReducer(BlogReducer, [])

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext; */