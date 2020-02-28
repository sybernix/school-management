import React, {Component} from "react";
import axios from "axios";

class StudentSignIn extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            studentID: "",
            password: "",
            userType: ""
        };
    }

    onChangeID = e => {
        this.setState({
            studentID: e.target.value
        });
    };

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const new_Instructor = {
            studentID: this.state.studentID,
            password: this.state.password
        };

        if (!new_Instructor.studentID) {
            alert("Enter Student ID");
        } else if (!new_Instructor.password) {
            alert("Enter Password");
        } else if (!new_Instructor.studentID && !new_Instructor.password) {
            alert("Enter Student Credentials");
        } else {
            axios
                .post("http://localhost:4000/api/student/login", new_Instructor)
                .then(res => {
                    if (res.status === 200) {
                        alert("Login Success! Welcome, " + this.state.studentID);
                        this.props.history.push("/studentDashboard");
                    } else {
                        alert("Login Failed! Please try again!");
                    }
                });
        }
    };

    render() {
        return (
            <div>
                <h2 align="center">Student Login</h2> <br/>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group col-7">
                            <label htmlFor="exampleInputEmail1">
                                <b>Student ID</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="studentID"
                                aria-describedby="emailHelp"
                                value={this.state.adminID}
                                onChange={this.onChangeID}
                                placeholder="Student ID"
                            />
                        </div>
                        <div className="form-group col-7">
                            <label htmlFor="exampleInputPassword1">
                                <b>Password</b>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                id="password"
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default StudentSignIn;
