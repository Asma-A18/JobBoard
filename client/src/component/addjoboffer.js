import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import {addjoboffer,editoffer} from "../js/actions/actioncreators"

class AddOffer extends Component {
    state = { 
        visible: false,
        ref:this.props.offers?this.props.offers.ref:"",
        name:this.props.offers?this.props.offers.name:"",
        telephone:this.props.offers?this.props.offers.telephone:"",
        email:this.props.offers?this.props.offers.email:"",
        description:this.props.offers?this.props.offers.description:"",
        deadline:this.props.offers?this.props.offers.deadline:"",
        date:this.props.offers?this.props.offers.date:"",



    };

    handleChange=(event)=>{
        this.setState({
           [event.target.name]:event.target.value
        })
    }


    initState=()=>{
        this.setState({
            ref:"",
            name:"",
            telephone:"",
            email: "",
            description : "" ,
            deadline : "",
            date : ""
                })
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    addEditoffer=()=>{
        this.props.offers?
        this.props.editoffer(this.props.offers._id,{
            ref:this.state.ref,
            name:this.state.name,
            telephone:this.state.telephone,
            email:this.state.email,
            description:this.state.description,
            deadline:this.state.deadline,
            date:this.state.date


        }):
        this.props.addjoboffer(this.state);
        this.verifyChamps()
    }

    // ref,name,telephone,email,description,deadline,date
    verifyChamps=()=>{
      if (!this.state.ref || !this.state.name || !this.state.deadline || !this.state.description || !this.state.telephone || !this.state.email)  {
alert('All Fields are required !')
      } else if (this.state.email.indexOf("@") === -1 ) {
        alert('Please enter a valid email address')
      }

    }
    render() {
        return (
            <div>
              
                  <Button className='save' type="primary" onClick={this.showModal}>
                     
                  {this.props.offers?"Edit":"Add New Job Offer"}
        </Button>
        <Modal
          title="New offer"
          visible={this.state.visible}
          onOk={()=>{this.addEditoffer();this.handleOk();this.initState()}}
          onCancel={this.handleCancel}
        >
            <div className="container-input">
          <input className="input" placeholder="Add Job Title" type="text"  name="ref" value={this.state.ref} onChange={this.handleChange} />
          <input className="input" placeholder="Add Employer's name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input className="input" placeholder="Add Post Description" type="text"   name="description" value={this.state.description} onChange={this.handleChange}/>
          <input className="input" placeholder="Add  your companys email" type="text"   name="email" value={this.state.email} onChange={this.handleChange}/>
          <input className="input" placeholder="Add your phone number" type="number"   name="telephone" value={this.state.telephone} onChange={this.handleChange}/>
          <input className="input" placeholder="Deadline : example 12/12/2020" type="date"   name="deadline" value={this.state.deadline} onChange={this.handleChange}/>
          <input className="input" placeholder="date" type="date"   name="date" value={this.state.date} onChange={this.handleChange}/>


          </div>
        </Modal>
            </div>
        )
    }
}


export default connect(null,{addjoboffer,editoffer})(AddOffer)