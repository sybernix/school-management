import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import MainHeader from "./header/MainHeader";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import Students from "./studentManagement/Students";
import StudentSignup from "./studentManagement/Signup/StudentSignup";
import StudentSignIn from "./signIn/StudentSignIn";
import StudentDashbord from "./studentManagement/StudentDashboard";
import { Helmet } from 'react-helmet'

const TITLE = 'School Management System - Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div>
          <MainHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />{" "}
            <Route path="/signup" component={StudentSignup} />{" "}
            <Route path="/studentsignin" component={StudentSignIn} />
            <Route path="/studentdashbord" component={StudentDashbord} />{" "}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
