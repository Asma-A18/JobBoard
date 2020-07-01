import axios from 'axios'
import {REGISTER_USER ,REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL,
    AUTH_USER,  AUTH_SUCCESS, AUTH_FAIL, LOGOUT,EDIT_USER, CLEAR_EMPLOYE} from '../constants/actions.types'

export const register = userData => async dispatch =>{
    dispatch ({
        type: REGISTER_USER 
    })
    try {
        const regRes = await axios.post('/register', userData)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: regRes.data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.errors
        })
        
    }}
   // Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_EMPLOYE });
  dispatch({ type: LOGOUT });
};

export const login = user => async dispatch =>{
    dispatch ({
        type: LOGIN_USER
    })
    try {
        const logRes = await axios.post('/login', user)
        
        localStorage.setItem('token',logRes.data.token);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: logRes.data
        })

     
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.errors
        })
        
    }

}

export const isAuthorized = () => async dispatch => {
    dispatch({
      type: AUTH_USER
    });
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
      const isAuth = await axios.get('/current', config);
      dispatch({
        type: AUTH_SUCCESS,
        payload: isAuth.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_FAIL,
        payload: error.response.data.errors
      });
    }

  };

  //EDIT USER
export const editUser = (id,newUser) => async dispatch => {
  dispatch({
    type: AUTH_USER
  });
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  };
  try {
    await axios.put(`/${id}`,newUser, config).then(res=>
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    
    }))
       
  } catch (error) {
    alert(error.response.data);
  }
};



// {"name":"jccdcd",
// 	"email": "hii@kbfh.fr",
// 	"password": "jfjfjf"
// }