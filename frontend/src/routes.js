import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Students from "./studentManagement/Students";
import StudentSignup from "./studentManagement/StudentSignUp";
import StudentSignIn from "./signIn/StudentSignIn";
import StudentDashbord from "./studentManagement/StudentDashboard";
import AdminSignIn from "./signIn/AdminSignIn";
import AdminDashboard from "./adminManagement/adminDashboard";
import Home from "./Home";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/students" exact component={Students} />
    <Route path="/studentSignup" exact component={StudentSignup} />
    <Route path="/studentSignin" exact component={StudentSignIn} />
    <Route path="/studentDashboard" exact component={StudentDashbord} />
    <Route path="/adminSignin" exact component={AdminSignIn} />
    <Route path="/adminDashboard" exact component={AdminDashboard} />
  </Switch>
);
