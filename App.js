
import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import "./App.css";// Replace with the correct path to your converted component
import Aboutus from "./component/About-us";
import About from "./component/About";
import Aboutemp from "./component/aboutemployee";
import Aboutlyr from "./component/aboutlawyer";
import Account from "./component/Account";
import Appointment from "./component/Appointment";
import Case from "./component/Case";
import Chat from "./component/chat";
import Client from "./component/Client";
import Connect from "./component/connecte";
import Contact from "./component/Contact";
import Document from "./component/Documents";
import Editprfl from "./component/edit-profile";
import Employee from "./component/Employee";
import Faqs from "./component/FAQs";
import Fees from "./component/fees";
import Home from "./component/Home";
import Home2 from "./component/HOME2";
import index1 from "./component/index1";
import Law from "./component/Law";
import Lawyer from "./component/LAWYER";
import Login from "./component/LOG-IN";
import Notification from "./component/Notification";
import Ourteam from "./component/our_team";
import Service from "./component/Service";
import Services from "./component/SERVICES";
import Signup from "./component/SIGNUP";
import Task from "./component/Tasks";




class App extends Component {
  render() {

  return (
    <div>

    <Switch>
    <Route exact path={["/", "index1"]} component={index1}/>
 
      <Route exact path={"/aboutus"} component={Aboutus}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/aboutemp"} component={Aboutemp}/>
      <Route exact path={"/aboutlyr"} component={Aboutlyr}/>
      <Route exact path={"/account"} component={Account}/>
      <Route exact path={"/appointment"} component={Appointment}/>
      <Route exact path={"/case"} component={Case}/>
      <Route exact path={"/chat"} component={Chat}/>
      <Route exact path={"/client"} component={Client}/>
      <Route exact path={"/connect"} component={Connect}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/document"} component={Document}/>
      <Route exact path={"/edit"} component={Editprfl}/>
      <Route exact path={"/employee"} component={Employee}/>
      <Route exact path={"/faqs"} component={Faqs}/>
      <Route exact path={"/fees"} component={Fees}/>
      <Route exact path={"/home"} component={Home}/>
      <Route exact path={"/home2"} component={Home2}/>
      <Route exact path={"/law"} component={Law}/>
      <Route exact path={"/lawyer"} component={Lawyer}/>
      <Route exact path={"/login"} component={Login}/>
      <Route exact path={"/notification"} component={Notification}/>
      <Route exact path={"/ourteam"} component={Ourteam}/>
      <Route exact path={"/service"} component={Service}/>
      <Route exact path={"/services"} component={Services}/>
      <Route exact path={"/signup"} component={Signup}/>
      <Route exact path={"/task"} component={Task}/>

    </Switch>
    </div>
  );
}
}


export default App;
