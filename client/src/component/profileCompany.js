import React from 'react';
import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';
import Nav from './Navbar';
import {Link} from 'react-router-dom'
 import { getcurrentcompany } from '../js/actions/Profileactions';
 import {isAuthorized  } from '../js/actions/actions';
import Footer from './layout/footer' 
import Spinner from './spinner'
import Companysprofile from './Companysaccount';



 class ProfileC extends React.Component {
   
  
 componentDidMount() {
   
  this.props.getcurrentcompany();
 
 }
// deleteAccount(){
//   this.props.deleteprofile();
// }
 render() {
  const {profile,isLoading,company}=this.props;
  let dach ;
  if(company===null||isLoading){
  
    dach = <Spinner/>
   
  }
  else{
  
    //check profile empty or not
    if(Object.keys(company).length>0)
    {
      dach = (
         <div>
 <p className="lead text-muted">Hello {profile.name} Welcome Among us ! :)  </p>
 <Companysprofile account={company}/>
<div style={{marginTop:"60px"}}>
  <Link to ="/" style={{marginLeft:"800px"}} className="btn btn-danger"><strong>Delete Account</strong></Link>
</div>
      </div>
      
       ) }
    else {
      //user has no proofile
    

      dach =( 
        <div>
        <p className="lead text-muted">Welcome {profile.name}</p>
        <p>You have not yet setup a profile,please add something about you</p>
        <Link to='./createProfile' className="btn btn-lg btn-info">Create profile </Link>
        </div>
      )
    }
  }
  return (
    <div>
      <Nav/>
     <div className="content">
     
            
            <div class="jumbotron jumbotron-fluid" style={{marginTop:"-30px",marginLeft:"-50px"}}>
  <div class="container">
    <h1 class="display-4 "><strong>Profile Account</strong> </h1>
    <p class="lead"></p>
  </div>
</div>
            {dach}
         
          </div>
    

 <Footer/>
  
   </div> 
    
  )}
  
  }
 const mapStateToProps = state => ({
 isAuth: state.authReducer.isAuth,
profile: state.authReducer.profile,
company:state.companyreducer.company
 });
 export default connect(mapStateToProps, { getcurrentcompany ,isAuthorized })(ProfileC);
