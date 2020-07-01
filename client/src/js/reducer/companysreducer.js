import{GET_COMPANY, COMPANY_LOADING, UPDATE_COMPANY,COMPANY_ERROR,GET_ERRORS,CLEAR_COMPANY,GET_COMPANIES}from'../constants/actions.types'



const initialState = {
isLoading: false,
company:null,
companies:[], error: {},
} 

const Companyreducer = (state=initialState, action) =>{
    const { type, payload } = action;
    switch(type){
      
        case COMPANY_LOADING:
        return {
            ...state,
            isLoading:true
          };
        case GET_COMPANY:
        case UPDATE_COMPANY:
          return {
            ...state,
            company: payload,
            isLoading: false,
          };
        case COMPANY_ERROR:
          return {
            ...state,
            error: payload,
            isLoading: false,
            // profile: null,
          };
        case CLEAR_COMPANY:
          return {
            ...state,
            company: null,
            isLoading: false,
          };
        case GET_COMPANIES:
          return {
            ...state,
            companies: payload,
            isLoading: false,
          };
    
        default:
          return state;
      }
    }
    export default Companyreducer