import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {register} from '../js/actions/actions'
import {connect} from 'react-redux'

class Signup extends Component {

    state = {
        name:'',
        email:'',
        password:''
    }
    changeHandle = (event) =>{
        this.setState({        
          [event.target.name]:event.target.value
        })
    }
    handleSubmit = (event) =>{
      event.preventDefault()
      this.props.register(this.state)
        
    }

  render() {
    return (
      <div>
        <div>{this.props.register.error}</div>
        <form>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={this.changeHandle}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              aria-describedby="emailHelp"
              onChange={this.changeHandle}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.changeHandle}
            />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <span>
          Having an account?<Link to='/login'>login</Link>
        </span>
        
      </div>
    );
  }  
}

export default connect (null,{register})(Signup);
