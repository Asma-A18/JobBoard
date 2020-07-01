import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import {addjoboffer,editoffer} from "../js/actions/actioncreators"

class AddOffer extends Component {
    state = { 
        visible: false,
        title:this.props.offers?this.props.offers.title:"",
        field:this.props.offers?this.props.offers.field:"",
        description:this.props.offers?this.props.offers.description:"",
        regime:this.props.offers?this.props.offers.regime:"",
        pay:this.props.offers?this.props.offers.pay:""
    };

    handleChange=(event)=>{
        this.setState({
           [event.target.name]:event.target.value
        })
    }


    initState=()=>{
        this.setState({
            title:"",
            field:"",
            description:"",
            regime: "",
            pay : ""       })
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
            title:this.state.title,
            field:this.state.field,
            description:this.state.description,
            regime:this.state.regime,
            pay:this.state.pay

        }):
        this.props.addjoboffer(this.state);
        this.verifyChamps()
    }


    verifyChamps=()=>{
      if (!this.state.title || !this.state.field || !this.state.description || !this.state.regime || !this.state.pay) {
alert('All Fields are required !')
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
          <input className="input" placeholder="Add Job Title" type="text"  name="title" value={this.state.title} onChange={this.handleChange} />
          <input className="input" placeholder="Add Employer's name" type="text" name="field" value={this.state.field} onChange={this.handleChange}/>
          <input className="input" placeholder="Add Post Description" type="text"   name="description" value={this.state.description} onChange={this.handleChange}/>
          <input className="input" placeholder="Add hourly regime" type="text"   name="regime" value={this.state.regime} onChange={this.handleChange}/>
          <input className="input" placeholder="Add hourly pay" type="number"   name="pay" value={this.state.pay} onChange={this.handleChange}/>


          </div>
        </Modal>
            </div>
        )
    }
}


export default connect(null,{addjoboffer,editoffer})(AddOffer)