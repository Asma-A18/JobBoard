import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './layout/footer'
import Nav from './Navbar';
import {AddProfile} from '../js/actions/Profileactions'
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

addprof=()=>{
    if ( !this.state.about || !this.state.phone || !this.state.address|| !this.state.field)  {
      alert('All Fields are required !')
            } 
      
            else if (this.state.phone.length !== 8 ) {
              alert('Please enter a valid  phone number')
            }
      
            else if (this.state.about.length > 120 ) {
              alert('You have exceeded the numbers of characters allowed')
            }
             else { const compdets={
                about:this.state.about,
                address:this.state.address,
                phone: this.state.phone,
                field: this.state.field,
          
            } 
            this.props.AddProfile(compdets)}
     
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
                <div className="container-input">
          <input className="input" placeholder="Add a Short description about you " type="text" name="about" value={this.state.about} onChange={this.handleChange}/>
          <input className="input" placeholder="Add You Field : Marketing, Web Dev , bitcoin etc..." type="text"   name="field" value={this.state.field} onChange={this.handleChange}/>
          <input className="input" placeholder="Add  your Address" type="text"   name="address" value={this.state.address} onChange={this.handleChange}/>
          <input className="input" placeholder="Add your phone number" type="number"   name="phone" value={this.state.phone} onChange={this.handleChange}/>
          <button className='inputbutton' type="primary" onClick={this.addprof}>Submit </button>

          </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    company:state.companyreducer.company,
})



export default connect(mapStateToProps, {AddProfile})(withRouter(UpgradeProf))