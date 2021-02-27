import createDataContext from './createDataContext'

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `Blog Post # ${state.length + 1}` }]
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }
}

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost },
  []
)

/* export const BlogProvider = ({ children }) => {

  const [blogPosts, disptach] = useReducer(BlogReducer, [])

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext; */