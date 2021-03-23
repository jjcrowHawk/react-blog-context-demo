import { call } from 'react-native-reanimated'
import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

//Reducer for blogPost state
const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload
    /* case 'ADD_BLOGPOST':
      return [...state,
      {
        id: Math.floor(Math.random() * 999999),
        title: action.payload.title,
        content: action.payload.content
      }] */
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
const getBlogPosts = (dispatch) => {
  return async () => {
    const response= await jsonServer.get('/blogposts');

    dispatch({ type: 'GET_BLOGPOSTS', payload: response.data })
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    
    if(callback) {
      callback();
    }
  }
  /* return (title, content) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  } */
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'DELETE_BLOGPOST', payload: { id } })
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    if(callback){
      callback();
    }

    /* return new Promise((resolve, reject) => {
      try {
        dispatch({
          type: 'EDIT_BLOGPOST',
          payload: { id, title, content }
        })
        resolve()
      } catch (error) {
        reject(error)
      }
    }) */

  }
}

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)

/* export const BlogProvider = ({ children }) => {

  const [blogPosts, disptach] = useReducer(BlogReducer, [])

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext; */