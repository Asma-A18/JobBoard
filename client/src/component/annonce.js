import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from './Navbar'
import {getoffers,deleteoffer,getcurrentAnnonce}from '../js/actions/actioncreators'
import { Card } from 'antd'
import { Button } from 'antd';
import AddOffer from './addjoboffer'
import { isAuthorized } from '../js/actions/actions';





class JobsList extends React.Component {
  componentDidMount() {
    this.props.getcurrentAnnonce()
  }
  render() {
    const { isAuth, profile } = this.props;
    return isAuth ? (+<Redirect to='/login' />) : (<div> <Nav profil={profile}> </Nav>
  
      <div className="content">
   <div className='jobscontainer'>
{this.props.jobsList.map((el,i)=>(

<div id="wrapper">
  <div class="card card-1">
    <div class="work-rate">
     <p onClick={()=> this.props.deleteoffer(el._id)}>x</p>
</div>
    <div class="pos-nd-loc">
    <p class="job-title">{el.name}</p>
    <p class="email">{el.email}</p>
      </div>
    <div class="tags">
      <button>{el.ref}</button>
      <button>{el.telephone}</button>
    </div>
    <p class="job-desc">
 {el.description}
    </p>
    <AddOffer offers={el}/>      </div>
</div>

))}

  </div>
  </div>
  </div>
     
   

    )
  }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
  jobsList:state.jobs.annonces
  

});
export default connect(mapStateToProps, { isAuthorized,getoffers,deleteoffer,getcurrentAnnonce })(JobsList);
