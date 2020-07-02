import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';
import {createProfile} from '../js/actions/Profileactions'
import { Link, withRouter } from 'react-router-dom';



export class UpgradeProf extends Component {

constructor(props){
    super(props);
    this.state={
        about:'',
        address:'',
        phone:'',
        field:'',
        errors:{}
    }
}


onSubmit=(e)=>{
    e.preventDefault();
    const profileData={
      about:this.state.about,
      address:this.state.address,
      phone: this.state.phone,
      field: this.state.field,

  } 
  this.props.createProfile(profileData,this.props.history)
  this.verifyChamps()

}

verifyChamps=()=>{
    if (  !this.state.about || !this.state.address || !this.state.phone || !this.state.field)  {
alert('All Fields are required !')
    }
  }


handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


    render() {
        return (
            <div>
                <Nav/>
                <div className="content"> 
               <div className="container">
                   <div className="row">
                       <div className="col-md-8 m-auto">
                           <h1 className="display-4 text-center">Create Your Profile</h1>
                           <p classNale="lead" style={{marginLeft:"200px"}}>Let's get some informations about you</p>
                       <form onSubmit={this.onSubmit}>
                       <textarea className="form-control form-control_lg" placeholder="About you..." name="about" value={this.state.about}onChange={this.handleChange} 
                       />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">Add Description</small>}
                       {<div className="invalid-feedback">bio invalid </div>}

                       <input className="form-control form-control_lg" placeholder="address..." name="address" value={this.state.address}onChange={this.handleChange} />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">please seperate your skills with ,</small>}
                       {<div className="invalid-feedback">inviled skills</div>}
                    
                       <small className="d-block-pb-3" style={{color:"red",float:"right"}}>*=required fileds</small>                     
                       
                       <input className="form-control form-control_lg" placeholder="* Your phone..." name="phone" value={this.state.phone}onChange={this.handleChange}   required/>
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">Add a phone number</small>}
                       {<div className="invalid-feedback">bio invalid </div>}
                        <input className="form-control form-control_lg" placeholder="* Your field..." name="field" value={this.state.field}onChange={this.handleChange}   required/>
                       {<small className="form-text text-muted">add your situation</small>}
                       {<div className="invalid-feedback">you must add your status </div>}
                           <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/> 
                           </form>
                       </div>


                   </div>
               </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    company:state.companyreducer.company,
    errors:state.errorReducer
})



export default connect(mapStateToProps, {createProfile})(withRouter(UpgradeProf))