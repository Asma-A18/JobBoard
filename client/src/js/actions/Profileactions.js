import axios from 'axios';
import {GET_COMPANY,COMPANY_LOADING,GET_ERRORS,CLEAR_COMPANY} from '../constants/actions.types'





//get current profile COMPANY



export const getcurrentcompany=()=>async (dispatch)=>{
    dispatch(setcompanyLoading());
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };
    try {
        const res = await axios.get('/companysprofile/me',config);
        dispatch({
          type: GET_COMPANY,
          payload: res.data,
        });
      } 
    catch(err)
       { dispatch({
            type:GET_COMPANY,
            payload: {},

       })}}


//profile loading
export const setcompanyLoading=()=>{
    return{
        type:COMPANY_LOADING,
    }
}

//profile loading
export const clearCompany=()=>{
  return{
      type:CLEAR_COMPANY,
  }
}


// Create or update profile
export const createProfile = (formData, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

     axios.post('/companysprofile', formData, config).then (res=> history.push('./profileCompany'))
    }
     catch (err)
     {dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }}






    // UPDATE profile
// export const editprofile = (formData, history) => async (
//   dispatch
// ) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     };

//      axios.put(`/companysprofile/${id}` , formData, config).then (res=> history.push('./profileCompany'))
//     }
//      catch (err)
//      {dispatch({
//         type:GET_ERRORS,
//         payload:err.response.data
//       })
//     }}


    