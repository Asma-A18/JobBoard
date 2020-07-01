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
  <p className="job-title">{el.title}</p>
  <p className="company-name">{el.field}</p>
  <p className="desc">{el.description}</p>

  <div class="skills-container">
    <div className="skill">{el.pay} DT</div>
    <div className="skill">{el.regime}</div>
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
  jobsList:state.jobs.offers
  

});
export default connect(mapStateToProps, { isAuthorized,getoffers,deleteoffer,getcurrentAnnonce })(JobsList);


{/* <div className="container-cards">
{this.props.jobsList.map((el,i)=>(
    <div className="container-card">
      <Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://www.best-job-interview.com/images/joboffer1.jpg" />}
>
<div className="containerr">
<span>Job Title</span>
<Meta title={el.title} />
</div>

<div className="containerr">
<span>Job Field:</span>
<Meta description={el.field}/>
</div>
<div className="containerr">
<span>Job Description:</span>
<Meta description={el.description}/>
</div>



<div className="container-btn">
<Button onClick={()=>this.props.deleteoffer(el._id)} type="primary" block>
Delete
</Button>
<AddOffer offers={el}/>
</div>

</Card>
    </div>
))}
</div> */}




  {/* <ul class="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i class="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
        <i class="fa fa-behance"></i>
      </a>
    </li>
  </ul> */}