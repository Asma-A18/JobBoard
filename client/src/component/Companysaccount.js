import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from './layout/footer'



 class Companysprofile extends Component {
    render() {

        return (
          
         
          <div className='content'>
          <div class="container emp-profile">
                      <form >
                          <div class="row">
                              <div class="col-md-4">
                                  <div class="profile-img">
                                      <img src="https://media.glassdoor.com/l/e7/65/91/9c/our-head-office-in-walsall.jpg" alt=""/>
          
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="profile-head">
                                              <h5>
                                                 {this.props.profile.name}
                                              </h5>
                                              <h6>
                                                 {this.props.account.field}
                                              </h6>
                                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                                          <li class="nav-item">
                                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-md-2">
                                <Link to='updateprofile'>
                                  <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                                  </Link>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-4">
                                  <div class="profile-work">
        <p>{this.props.account.about}</p>
                                  </div>
                              </div>
                              <div class="col-md-8">
                                  <div class="tab-content profile-tab" id="myTabContent">
                                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Companys Name</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>{this.props.profile.name}</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Head Office</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>{this.props.account.address}</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Email</label>
                                                      </div>
                                                      <div class="col-md-6">
        <p>{this.props.profile.email}</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Phone</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>1{this.props.account.phone}</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Operations Field</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>{this.props.account.field}</p>
                                                      </div>
                                                  </div>
                                      </div>
                                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Staff</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>10-50 employees</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Launch Date</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>12/12/2012</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Corporate Name</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>SARL</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Website</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>company@company.com</p>
                                                      </div>
                                                  </div>
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <label>Remote possibilty</label>
                                                      </div>
                                                      <div class="col-md-6">
                                                          <p>Yes</p>
                                                      </div>
                                                  </div>
                                          <div class="row">
                                              <div class="col-md-12">
                                            
                                                  <p> View {this.props.profile.name}'s Offers
                                                   </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form> 
                  </div>
                  </div>
        )
    }
}


const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
 profile: state.authReducer.profile,
  });
  export default connect(mapStateToProps, {})(Companysprofile);