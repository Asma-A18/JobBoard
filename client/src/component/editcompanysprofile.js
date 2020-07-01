import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { createProfile,getcurrentcompany } from '../js/actions/Profileactions';

import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';


 class UpdateProfile extends Component {

constructor(props){
    super(props);
    this.state={
        about:'',
        field:'',
        phone:'',
        address:'',
        errors:{}
    }
}

componentWillMount(){
this.props.getcurrentcompany()&&
this.setState({
    about: this.props.company.about,
    field: this.props.company.field,
    phone: this.props.company.phone,
    address: this.props.company.address,

    
  });
}
componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({
            errors:nextProps.errors
        })

    }
}

onSubmit=(e)=>{
    e.preventDefault();
   const profileData={
       about:this.state.about,
       field:this.state.field,
       phone: this.state.phone,
       address: this.state.address,


   } 
   this.props.createProfile(profileData,this.props.history)
}
addEmploye=()=>{

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
                           <h1 className="display-4 text-center">Edit Your Profile</h1>
                           <p classNale="lead" style={{marginLeft:"200px"}}>Let's edit some informations about you</p>
                       <form onSubmit={this.onSubmit}>
                           
                       <textarea className="form-control form-control_lg md-8" placeholder="add your bio..." name="about" value={this.state.about}onChange={this.handleChange} 
                       />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">add bio</small>}
                       {<div className="invalid-feedback">bio invalid </div>}

                       <input className="form-control form-control_lg md-8" placeholder="field..." name="field" value={this.state.field}onChange={this.handleChange} />
                       {<small style={{marginBottom:"10px"}} className="form-text text-muted">please seperate your skills with ,</small>}
                       {<div className="invalid-feedback">inviled skills</div>}
                    
                       <small className="d-block-pb-3" style={{color:"red",float:"right"}}>*=required fileds</small>                     
                       <input className="form-control form-control_lg" placeholder="* Your phone..." name="phone" value={this.state.phone}onChange={this.handleChange}   required/>
                       <input className="form-control form-control_lg" placeholder="* Your address..." name="address" value={this.state.address} onChange={this.handleChange}   required/>
                       {<small className="form-text text-muted">add your situation</small>}
                       {<div className="invalid-feedback">you must add your status </div>}
                           <input type="submit" value="Edit Profile" className="btn btn-info btn-block mt-4"/>
                           
                           
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


export default connect(mapStateToProps,{createProfile,getcurrentcompany} )(withRouter(UpdateProfile))


