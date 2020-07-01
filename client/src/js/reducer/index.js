import {combineReducers} from 'redux'
import authReducer from './authreducer'
import employeReducer from './employeRrducer'
import errorReducer from './errorReducer'
import Jobsoffer from './jobsoffersreducer'
import profilereducer from './profilesReducer'
import companyreducer from './companysreducer'
import annonceReducer from './jobsoffersreducer'

export default combineReducers({
    authReducer,
    employeReducer,
    errors:errorReducer,
    jobs : Jobsoffer,
    profile : profilereducer,
     companyreducer,
     annonceReducer

})