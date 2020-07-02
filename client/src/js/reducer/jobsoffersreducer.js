import{GET_ANNONCE, UPDATE_ANNONCE,ANNONCE_LOADING,ANNONCE_ERROR,GET_ERRORS,DELETE_ANNONCE,GET_ANNONCES,ADD_ANNONCE}from '../constants/actions.types'



const initialState = {
isLoading: false,
annonce:null,
annonces:[], error: {},
} 

const annonceReducer = (state=initialState, action) =>{
    const { type, payload } = action;
    switch(type){
    
        case GET_ANNONCE:
          
          return {
            ...state,
            annonce: payload,
            isLoading: false,
          };
        case GET_ANNONCES:
          return {
            ...state,
            annonces: payload,
            isLoading: false,
          };
   
        default:
          return state;
      }
    }
    export default annonceReducer