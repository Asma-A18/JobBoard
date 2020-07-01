import React from 'react';
import{useEffect}from 'react'
import store from './js/store/index';
import { Provider } from 'react-redux';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './component/Signup'
import Signin from './component/Signin'
// import Profile from './component/Profile';
import Navbar from './component/Navbar'
import Annonce from './component/annonce';
import AuthToken from './util/authToken';
import { isAuthorized} from './js/actions/actions';
import CreateProfile  from './component/createProfile';
import JobsList from './component/annonce'
import AddOffer from './component/addjoboffer'
import UpgradeProf from './component/addprofile'
import ProfileC from './component/profileCompany'
import UpdateProfile from './component/editcompanysprofile'


if (localStorage.token) {
  AuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch( isAuthorized());
  }, []);
  return (
    <div className="App">
      {/* <AddOffer/> */}
         {/* <UpdateProfile/> */}
        {/* <ProfileInfos/>  */}
      <BrowserRouter>
      <Switch>
      {/* <Route exact path='/' component={Navbar} /> */}
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' render={props=><Signin {...props}/>} />
        <Route exact path='/profileCompany' render={props=><ProfileC {...props}/>} />
        {/* <Route exact path='/companysprofile/:id' render={props=><ProfileInfos {...props}/>} /> */}
        <Route exact path='/createProfile' render={props=><UpgradeProf {...props}/>} />
        <Route exact path='/updateprofile' render={props=><UpdateProfile {...props}/>} />

        

        {/* <Route exact path ='/offers' render={props =>   <JobsList {...props}/>} /> */}
        <Route exact path='/annonce' component={JobsList}/>
        <Route exact path='/addoffer' component={AddOffer}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
