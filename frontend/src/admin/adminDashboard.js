import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {redirect} from "../utils/utils";

class AdminDashboard extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <div style={{marginTop: 20}}>
                            <center>
                                <div className="card mb-3" style={{width: "700px"}}>
                                    <div style={{width: "700px"}}>
                                        <div className="card-header">
                                            <b>
                                                <h3> Admin Dashbord </h3>
                                            </b>
                                        </div>
                                        <div className="çard-body"/>
                                        <div>
                                            <li>
                                                <Link onClick={() => redirect('/studentSignup')}> Register New
                                                    Student </Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AdminDashboard;
