import axios from 'axios';
import {GET_COMPANY,COMPANY_LOADING,GET_ERRORS,CLEAR_COMPANY} from '../constants/actions.types'





//get current profile COMPANY



export const getcompany=()=>async (dispatch)=>{
    dispatch(companyLoading());
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
export const companyLoading=()=>{
    return{
        type:COMPANY_LOADING,
    }
}

export const clearCompany=()=>{
  return{
      type:CLEAR_COMPANY,
  }
}


export const AddProfile = (compdets) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

     axios.post('/companysprofile', compdets, config)
    }
     catch (err)
     {dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    }}




    export const deleteprof = (compdets) => async (
      dispatch
    ) => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        };
    
         axios.delete( `/companysprofile` , compdets, config)
        }
         catch (err)
         {dispatch({
            type:GET_ERRORS,
            payload:err.response.data
          })
        }}

   

    