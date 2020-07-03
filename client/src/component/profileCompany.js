import React from 'react';
import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';
import Nav from './Navbar';
import {Link} from 'react-router-dom'
 import { getcompany } from '../js/actions/Profileactions';
 import {isAuthorized  } from '../js/actions/actions';
import Footer from './layout/footer' 
import Spinner from './spinner'
import Companysprofile from './Companysaccount';



 class ProfileC extends React.Component {
   
  
 componentDidMount() {
   
  this.props.getcompany();
 
 }
// deleteAccount(){
//   this.props.deleteprofile();
// }
 render() {
  const {profile,isLoading,company}=this.props;
  let companysProfile ;
  if(company===null||isLoading){
  
    companysProfile = <Spinner/>
   
  }
  else{
  
    //check profile empty or not
    if(Object.keys(company).length>0)
    {
      companysProfile = (
         <div>
 <Companysprofile account={company}/>
      </div>
      
       ) }
    else {
    

      companysProfile =( 
        <div>
        <p className="lead text-muted">Welcome {profile.name}</p>
        <p>Please Add Some Informations about your Company</p>
        <Link to='./createProfile' className="btn btn-lg btn-info">Upgrade Your Profile </Link>
        </div>
      )
    }
  }
  return (
    <div>
      <Nav/>
     <div className="content">
    
            {companysProfile}
         
          </div>
    

  
   </div> 
    
  )}
  
  }
 const mapStateToProps = state => ({
 isAuth: state.authReducer.isAuth,
profile: state.authReducer.profile,
company:state.companyreducer.company
 });
 export default connect(mapStateToProps, { getcompany ,isAuthorized })(ProfileC);
