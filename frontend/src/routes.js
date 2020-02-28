import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Students from "./student/Students";
import StudentSignup from "./student/StudentSignUp";
import StudentSignIn from "./student/StudentSignIn";
import StudentDashbord from "./student/StudentDashboard";
import AdminSignIn from "./admin/AdminSignIn";
import AdminDashboard from "./admin/adminDashboard";
import Home from "./Home";

export default () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/students" exact component={Students}/>
        <Route path="/studentSignup" exact component={StudentSignup}/>
        <Route path="/studentSignin" exact component={StudentSignIn}/>
        <Route path="/studentDashboard" exact component={StudentDashbord}/>
        <Route path="/adminSignin" exact component={AdminSignIn}/>
        <Route path="/adminDashboard" exact component={AdminDashboard}/>
    </Switch>
);
