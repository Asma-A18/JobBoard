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
    //console.log(profile)
    console.log(isAuth)
    return isAuth ? (+
      <Redirect to='/login' />
    ) : (<div>
      <Nav profil={profile}> </Nav>
      
      <div className="content">
      <div class="search-container">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
      </div>



{this.props.jobsList.map((el,i)=>(
    <div>
     <article className="job-card">
  <div className="company-logo-img">
    <img src="https://s3-ap-southeast-1.amazonaws.com/hs.user-files/employer_logo/346/primetech-technology.png" />
  </div>
  <p className="job-title">{el.ref}</p>
  <p className="company-name">{el.name}</p>
  <p className="desc">{el.description}</p>
  <p className="desc">{el.deadline}</p>
  <div class="skills-container">
    <div className="skill">{el.telephone}</div>
    <div className="skill">{el.email}</div>
  </div>
  <button onClick={()=>this.props.deleteoffer(el._id)} class="apply">Delete</button>
  <a href="#"></a>
  <div className="container-btn">
<AddOffer offers={el}/>
</div>
</article>

  </div>


))}
</div>


     
    </div>

    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  profile: state.authReducer.profile,
  jobsList:state.jobs.annonces
  

});
export default connect(mapStateToProps, { isAuthorized,getoffers,deleteoffer,getcurrentAnnonce })(JobsList);
