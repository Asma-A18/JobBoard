// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {getoffers,deleteoffer}from '../js/actions/actioncreators'
// import { Card } from 'antd'
// import { Button } from 'antd';
// import AddOffer from './addjoboffer'

// const { Meta } = Card;

//  class JobsList extends Component {

//     componentDidMount(){
//         this.props.getoffers()
//     }

    

    
//     render() {

//         return (


//             <div className="container-cards">
//               {this.props.jobsList.map((el,i)=>(
//                   <div className="container-card">
//                     <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://www.best-job-interview.com/images/joboffer1.jpg" />}
//   >
//     <div className="containerr">
//     <span>Job Title</span>
//     <Meta title={el.title} />
//     </div>
   
//     <div className="containerr">
//     <span>Job Field:</span>
//     <Meta description={el.field}/>
//     </div>
//     <div className="containerr">
//     <span>Job Description:</span>
//     <Meta description={el.description}/>
//     </div>



//     <div className="container-btn">
//     <Button onClick={()=>this.props.deleteoffer(el._id)} type="primary" block>
//       Delete
//     </Button>
//    <AddOffer offers={el}/>
//     </div>
  
//   </Card>
//                   </div>
//               ))}
//             </div>
//         )
//     }
// }
// const mapStateToProps=(state)=>{
//     return{
//         jobsList:state.jobs.offers
//     }
// }
// export default connect(mapStateToProps,{getoffers,deleteoffer})(JobsList)