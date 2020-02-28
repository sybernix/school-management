import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MainHeader from "./utils/layouts/MainHeader";
import Footer from "./utils/layouts/Footer";
import Routes from "./routes";
import {Helmet} from 'react-helmet'

const TITLE = 'School Management System - Home'

class App extends Component {
    render() {
        return (
            <Router>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <div>
                    <MainHeader/>
                    <Routes/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
