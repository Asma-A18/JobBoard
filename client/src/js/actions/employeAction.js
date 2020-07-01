// import axios from 'axios';
// import {GET_EMPLOYE,EMPLOYE_LOADING,GET_ERRORS,CLEAR_EMPLOYE} from '../constants/actions.types'

// //get current profile employe
// export const getcurrentEmploye=()=>async (dispatch)=>{
//     dispatch(setEmployeLoading());
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     };
//     try {
//         const res = await axios.get('/employe/me',config);
//         dispatch({
//           type: GET_EMPLOYE,
//           payload: res.data,
//         });
//       } 
//     catch(err)
//        { dispatch({
//             type:GET_EMPLOYE,
//             payload: {},

//        })}}


// //profile loading
// export const setEmployeLoading=()=>{
//     return{
//         type:EMPLOYE_LOADING,
//     }
// }

// //profile loading
// export const clearEmploye=()=>{
//   return{
//       type:CLEAR_EMPLOYE,
//   }
// }


// // Create or update profile
// export const createProfile = (formData, history) => async (
//   dispatch
// ) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     };

//      axios.post('/employe', formData, config).then (res=> history.push('./profile'))
//     }
//      catch (err)
//      {dispatch({
//         type:GET_ERRORS,
//         payload:err.response.data
//       })
//     }}

    