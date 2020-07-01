import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'



 class Companysprofile extends Component {
    render() {

        return (
            <div style={{marginBottom:"30px"}}>
                <div class="card col-md-8">
  <div class="card-header">
  <h2 className='my-2'>  Global Information </h2> 
  </div>
  <div class="card-body">
  
  <label style={{fontSize:"15px"}}><strong>Name:</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.profile.name}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Email:</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.profile.email}</label> <br/>
         <label style={{fontSize:"15px"}}><strong>About :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.about}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Field :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.field}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Phone :</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.phone}</label> <br/>
              <label style={{fontSize:"15px"}}><strong>Address:</strong></label>
              <label style={{marginLeft:"45px",fontSize:"15px"}}>{this.props.account.address}</label> <br/>
              <div>
      <Link to='/updateprofile'>
      <button style={{marginRight:"23px"}}type="button" class="btn btn-primary desactive"><i class="fas fa-user-circle text-info mr-1 "/>Edit Profile</button>
      </Link>
    </div>
             
              ))             
                <br/>
               
     
    </div>
  </div>
</div>
            
        )
    }
}


const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
 profile: state.authReducer.profile,
  });
  export default connect(mapStateToProps, null)(Companysprofile);