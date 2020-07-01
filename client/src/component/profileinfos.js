// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {getinfos}from '../js/actions/Profileactions'
// import { Card } from 'antd'
// import { Button } from 'antd';
// import UpdateProfile from './addprofile'

// const { Meta } = Card;

//  class ProfileInfos extends Component {
//     componentDidMount(){
//         this.props.getinfos()
//     }

    
//     render() {
//       const {profile, isLoading,employe}=this.props;

//         return (
//             <div className="container-cards">
//               {this.props.informations.map((el,i)=>(
//                   <div className="container-card">
//                     <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://www.blow-ent.com/wp-content/uploads/2019/02/Netflix.png" />}
//   >
//     <div className="container">
//     <span>Company's Name:</span>
//     <Meta description={   <p>{profile ? ` ${profile.name}`: 'null' }</p>
// } />
//     </div>
//     <div className="container">
//     <span>Email : </span>
//     <Meta description={<p>{profile ? ` ${profile.email}`: 'null' }</p>}/>
//     </div>
//     <div className="container">
//     <span>Company's operation field:</span>
//     <Meta description={el.field}/>
//     </div>
//     <div className="container">
//     <span>About Company: </span>
//     <Meta description={el.about}/>
//     </div>

//     <div className="container">
//     <span>Phone :</span>
//     <Meta description={el.phone}/>
//     </div>

//     <div className="container">
//     <span>Address</span>
//     <Meta description={el.address}/>
//     </div>

  
//     <div className="container-btn">
  
//    <UpdateProfile informations={el}/>

//     </div>

//   </Card>,

  
//                   </div>
//               ))}
              
//             </div>
//         )
//     }
// }



// const mapStateToProps = state => ({
//   informations:state.profile.profiles,
//   isAuth: state.authReducer.isAuth,
//  profile: state.authReducer.profile,
//  employe:state.employeReducer.employe
//   });
//   export default connect(mapStateToProps, { getinfos})(ProfileInfos);