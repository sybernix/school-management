import React, {Component} from "react";
import TextInputGroup from "../utils/inputDefinitions/TextInputGroup";
import TextSelectGroup from "../utils/inputDefinitions/TextSelectGroup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class StudentSignup extends Component {
    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeAdmissionNo = this.onChangeAdmissionNo.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeDateOfAdmission = this.onChangeDateOfAdmission.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.houseOptions = [
            {label: "Green", value: 1},
            {label: "Yellow", value: 2},
            {label: "Brown", value: 3},
        ];

        this.transportOptions = [
            {label: "Bus", value: 1},
            {label: "Van", value: 2},
            {label: "Private Vehicle", value: 3},
        ];

        this.state = {
            studentName: "",
            studentID: "",
            email: "",
            password: "",
            dateOfBirth: "",
            dateOfAdmission: "",
            errors: {}
        };
    }

    onChangeStudentName(e) {
        this.setState({
            studentName: e.target.value
        });
    }

    onChangeDateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value
        });
    }

    onChangeDateOfAdmission(e) {
        this.setState({
            dateOfAdmission: e.target.value
        });
    }

    onChangeAdmissionNo(e) {
        this.setState({
            admissionNo: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/api/course/")
            .then(response => {
                this.setState({courseList: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();

        const {studentName, dateOfBirth, dateOfAdmission, admissionNo, email, password, nic} = this.state;

        //Check for errors
        if (studentName === "") {
            this.setState({errors: {studentName: "student Name is required"}});
            return;
        }
        if (dateOfBirth === "") {
            this.setState({errors: {dateOfBirth: "Date of birth is required"}});
            return;
        }
        if (dateOfAdmission === "") {
            this.setState({errors: {dateOfAdmission: "Date of admission is required"}});
            return;
        }
        if (admissionNo === "") {
            this.setState({errors: {admissionNo: "Admission Number is required"}});
            return;
        }
        if (password === "") {
            this.setState({errors: {password: "Password is required"}});
            return;
        }
        if (email === "") {
            this.setState({
                errors: {email: "Email is required"}
            });
            return;
        }

        const newUser = {
            studentName: this.state.studentName,
            dateOfBirth: this.state.dateOfBirth,
            dateOfAdmission: this.state.dateOfAdmission,
            admissionNo: this.state.admissionNo,
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post("http://localhost:4000/api/student/add", newUser)
            .then(
                res => console.log(res.data),
                alert("You are successfully registered")
            );

        //Clear state after error checking(When click submit button)
        this.setState({
            studentName: "",
            dateOfBirth: "",
            dateOfAdmission: "",
            admissionNo: "",
            email: "",
            password: "",
        });
    }

    render() {
        const {errors} = this.state;

        return (
            <div style={{marginTop: 20}}>
                <center>
                    <div className="card mb-3" style={{width: "700px"}}>
                        <div style={{width: "700px"}}>
                            <div className="card-header">
                                <b> Student Registration</b>
                            </div>
                            <div className="card-header">
                                <b> Please enter full information and click submit</b>
                            </div>
                            <div className="çard-body">
                                <form onSubmit={this.onSubmit}>
                                    <TextInputGroup
                                        label="Full Name"
                                        name="studentName"
                                        placeholder=" Full Name"
                                        value={this.state.studentName}
                                        onChange={this.onChangeStudentName}
                                        error={errors.studentName}
                                    />
                                    <TextInputGroup
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                        placeholder=" Date of Birth"
                                        type="date"
                                        value={this.state.dateOfBirth}
                                        onChange={this.onChangeDateOfBirth}
                                        error={errors.dateOfBirth}
                                    />
                                    <TextInputGroup
                                        label="Date of Admission"
                                        name="dateOfAdmission"
                                        placeholder=" Date of Admission"
                                        type="date"
                                        value={this.state.dateOfAdmission}
                                        onChange={this.onChangeDateOfAdmission}
                                        error={errors.dateOfAdmission}
                                    />
                                    <TextInputGroup
                                        label="Admission Number"
                                        name="admissionNo"
                                        placeholder=" Admission Number"
                                        value={this.state.admissionNo}
                                        onChange={this.onChangeAdmissionNo}
                                        error={errors.admissionNo}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder=" Email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder=" Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        error={errors.password}
                                    />
                                    <TextInputGroup
                                        label="Current Class"
                                        name="currentClass"
                                        placeholder=" Current Class"
                                        value={this.state.currentClass}
                                        onChange={this.onChangeCurrentClass}
                                        error={errors.currentClass}
                                    />
                                    <TextSelectGroup
                                        label="House"
                                        name="house"
                                        options={this.houseOptions}
                                        placeholder=" House"
                                        value={this.state.house}
                                        onChange={this.onChangeHouse}
                                        error={errors.house}
                                    />
                                    <TextSelectGroup
                                        label="Mode of Transport"
                                        name="modeOfTransport"
                                        options={this.transportOptions}
                                        placeholder=" Mode of Transport"
                                        value={this.state.transport}
                                        onChange={this.onChangeTransport}
                                        error={errors.transport}
                                    />
                                    <TextInputGroup
                                        label="Allergies"
                                        name="allergies"
                                        placeholder=" Allergies"
                                        value={this.state.allergies}
                                        onChange={this.onChangeAllergies}
                                        error={errors.allergies}
                                    />
                                    <div>
                                        <button
                                            class="btn waves-effect waves-light"
                                            type="submit"
                                            name="action"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default StudentSignup;
