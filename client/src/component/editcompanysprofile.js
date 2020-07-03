import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { AddProfile,getcompany } from '../js/actions/Profileactions';
import { Modal, Button } from 'antd';
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
this.props.getcompany()&&
this.setState({
    about: this.props.company.about,
    field: this.props.company.field,
    phone: this.props.company.phone,
    address: this.props.company.address,

    
  });
}


onSubmit=(e)=>{
    e.preventDefault();
   const compdets={
       about:this.state.about,
       field:this.state.field,
       phone: this.state.phone,
       address: this.state.address,


   } 
   this.props.AddProfile(compdets)
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
                <div className="container-input-edit">
          <input className="input" placeholder="Add a Short description about you " type="text" name="about" value={this.state.about} onChange={this.handleChange}/>
          <input className="input" placeholder="Add You Field : Marketing, Web Dev , bitcoin etc..." type="text"   name="field" value={this.state.field} onChange={this.handleChange}/>
          <input className="input" placeholder="Add  your Address" type="text"   name="address" value={this.state.address} onChange={this.handleChange}/>
          <input className="input" placeholder="Add your phone number" type="number"   name="phone" value={this.state.phone} onChange={this.handleChange}/>
          <button className='inputbutton' type="primary" onClick={this.onSubmit}>Submit </button>

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


export default connect(mapStateToProps,{AddProfile,getcompany} )(withRouter(UpdateProfile))


