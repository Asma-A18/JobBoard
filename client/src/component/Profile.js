import React from 'react';
import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';
import Nav from './Navbar';
import {Link} from 'react-router-dom'
 import { getcurrentEmploye } from '../js/actions/employeAction';
 import {isAuthorized  } from '../js/actions/actions';
import Footer from './layout/footer'
import Spinner from './spinner'
import { object } from 'prop-types';
import { userInfo } from 'os';
import ProfileInfos from './profileinfos';



 class Profile extends React.Component {
   
  
 componentDidMount() {
   this.props.getcurrentEmploye();
 
 }

 render() {
  const {profile}=this.props;
  const {isLoading,employe}=this.props;
  console.log(employe)
  let dach ;
  if(employe===null||isLoading){
    dach = <Spinner/>
  }else{
  
    //check profile empty or not
    if(Object.keys(employe).length>0)
    {dach=<h4>hello {profile.name} </h4>}
    else {
      //user has no proofile
      dach =(
        <div>
        <p className="lead text-muted"> Welcome {profile.name} </p>
        <p>You have not yet setup a profile,please add something about you</p>
        <Link to ={`/companysprofile/${profile._id}`}className="btn btn-lg btn-info">Create profile </Link>
        </div>
      )
    }
  }
  return (
    <div>
      <Nav/>
     <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            {dach }
          </div>
        </div>
      </div>


</div>

 <Footer/>
  
   </div> 
    
  )}
  
 }
 const mapStateToProps = state => ({
 isAuth: state.authReducer.isAuth,
profile: state.authReducer.profile,
employe:state.employeReducer.employe
 });
 export default connect(mapStateToProps, { getcurrentEmploye ,isAuthorized})(Profile);
