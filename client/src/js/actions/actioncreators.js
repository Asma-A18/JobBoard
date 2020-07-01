import axios from "axios"
import { GET_OFFERS} from "../constants/actions.types"
import { ANNONCE_LOADING,GET_ERRORS,GET_ANNONCES,AUTH_USER,LOGOUT,GET_ANNONCE} from '../constants/actions.types'


export const getoffers=()=>dispatch=>{
    axios.get('/annonce').then(res=>
        dispatch({
            type:GET_OFFERS,
            payload:res.data
        })
        )
}


export const addjoboffer = (newoffer) => async dispatch => {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
      await axios.post(`/annonce`,newoffer, config).then(res=>
      dispatch(getoffers()))
         
    } catch (error) {
      alert(error.response.data);
    }
  };




export const deleteoffer = (id) => async dispatch => {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
      await axios.delete(`/annonce/${id}`, config).then(res=>
      dispatch(getoffers()))
         
    } catch (error) {
      alert('errooooor');
    }
  };




export const editoffer = (id,newoffer) => async dispatch => {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
      await axios.put(`/annonce/${id}`,newoffer, config).then(res=>
      dispatch(getoffers()))
         
    } catch (error) {
      alert(error.response.data);
    }
  };

  
  
         
  // //get current profile employe
  export const getcurrentAnnonce=()=>async (dispatch)=>{
    dispatch(setAnnonceLoading());
     const config = {
       headers: {
         Authorization: localStorage.getItem('token')
      }
     };
  try {
       const res = await axios.get('/annonce/is',config);
     dispatch({
         type: GET_ANNONCE,
          payload: res.data,
                 });
      } 
     catch(err)
       { dispatch({
            type:GET_ANNONCE,
             payload: {},
       })}}


       
   //profile loading
   export const setAnnonceLoading=()=>{
      return{
          type:ANNONCE_LOADING,
      }
  }

 