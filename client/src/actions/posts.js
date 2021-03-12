import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


//Creating actions



// export const getPosts = () => async(dispatch) => {

//     try {
//         const { data } = await api.fetchPosts();
//         dispatch({type: 'FETCH_ALL', payload: data});
//     } catch (error) {
//         console.log(error.message);
        
//     }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch (action);
// }

// export const createPost = (post) => async(dispatch) => {
//     try {
//         const { data } = await api.createPost(post);
//         dispatch({type: 'CREATE ', payload : data});
        
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

