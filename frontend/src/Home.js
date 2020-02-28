import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./css/Home.css";
import {redirect} from "./utils/utils";

import studentimg from "./img/studentimage.jpg";
import instructorimg from "./img/instructorimage.jpg";
import adminimage from "./img/adminimage.jpg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Router>
                <div>
                    <section id="showcase">
                        <div class="container">
                            <h1>Welcome to School Management System</h1>
                        </div>
                    </section>
                    <section id="boxes">
                        <div class="container">
                            <div class="box">
                                <img src={studentimg} width="500"/>
                                <h3>
                                    <Link onClick={() => redirect('/studentSignIn')}> Student </Link>
                                </h3>
                                <p>
                                    If you are a student please click here
                                </p>
                            </div>
                            <div class="box">
                                <img src={instructorimg} width="500"/>
                                <h3>
                                    <Link to="/teacherSignIn"> Teacher </Link>
                                </h3>
                                <p>
                                    If you are a teacher please click here
                                </p>
                            </div>
                            <div class="box">
                                <img src={adminimage} width="500"/>
                                <h3>
                                    <Link onClick={() => redirect('/adminSignIn')}> Admin </Link>
                                </h3>
                                <p>
                                    If you are an admin please click here
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}

export default Home;
