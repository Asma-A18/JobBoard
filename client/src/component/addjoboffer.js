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
      if (!this.state.ref || !this.state.name || !this.state.deadline || !this.state.description || !this.state.telephone || !this.state.email)  {
        alert('All Fields are required !')
              } else if (this.state.email.indexOf("@") === -1 ) {
                alert('Please enter a valid email address')
              }
        
              else if (this.state.telephone.length !== 8 ) {
                alert('Please enter a valid  phone number')
              }
        
              else if (this.state.description.length > 120 ) {
                alert('You have exceeded the numbers of characters allowed')
              }
              else if (this.state.ref.length !== 6) {
                alert('Please enter a valid reference')
              } else { this.props.offers?
                this.props.editoffer(this.props.offers._id,{
                    ref:this.state.ref,
                    name:this.state.name,
                    telephone:this.state.telephone,
                    email:this.state.email,
                    description:this.state.description,
                    deadline:this.state.deadline,
                    date:this.state.date
        
        
                }):
                this.props.addjoboffer(this.state);}
       
    }

    // ref,name,telephone,email,description,deadline,date
   
    render() {
        return (
            <div>
              
                     
                  {this.props.offers?  <p className='editpr' onClick={this.showModal}> Edit</p> 

                  :<Button className='addbtn' type="primary" onClick={this.showModal}><span>Add a new Offer </span><Button/></Button>}
        <Modal
          title="New offer"
          visible={this.state.visible}
          onOk={()=>{this.addEditoffer();this.handleOk();this.initState()}}
          onCancel={this.handleCancel}
        >
            <div className="container-input">
          <input className="input" placeholder="Reference Must be 6 characters , First two letter of your company and today's date" type="text"  name="ref" value={this.state.ref} onChange={this.handleChange} />
          <input className="input" placeholder="Add job's title" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input className="input" placeholder="Add Post Description" type="text"   name="description" value={this.state.description} onChange={this.handleChange}/>
          <input className="input" placeholder="Add  your companys email" type="text"   name="email" value={this.state.email} onChange={this.handleChange}/>
          <input className="input" placeholder="Add your phone number" type="number"   name="telephone" value={this.state.telephone} onChange={this.handleChange}/>
          <input className="input" placeholder="Deadline : example 12/12/2020" type="date"   name="deadline" value={this.state.deadline} onChange={this.handleChange}/>


          </div>
        </Modal>
            </div>
        )
    }
}


export default connect(null,{addjoboffer,editoffer})(AddOffer)