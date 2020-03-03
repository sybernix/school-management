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
        this.onChangeCurrentClass = this.onChangeCurrentClass.bind(this);
        this.onChangeHouse = this.onChangeHouse.bind(this);
        this.onChangeTransport = this.onChangeTransport.bind(this);
        this.onChangeAllergies = this.onChangeAllergies.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeFatherName = this.onChangeFatherName.bind(this);
        this.onChangeFatherOccupation = this.onChangeFatherOccupation.bind(this);
        this.onChangeFatherTelephone = this.onChangeFatherTelephone.bind(this);
        this.onChangeFatherEmail = this.onChangeFatherEmail.bind(this);
        this.onChangeMotherName = this.onChangeMotherName.bind(this);
        this.onChangeMotherOccupation = this.onChangeMotherOccupation.bind(this);
        this.onChangeMotherTelephone = this.onChangeMotherTelephone.bind(this);
        this.onChangeMotherEmail = this.onChangeMotherEmail.bind(this);
        this.onChangeGuardianName = this.onChangeGuardianName.bind(this);
        this.onChangeGuardianOccupation = this.onChangeGuardianOccupation.bind(this);
        this.onChangeGuardianTelephone = this.onChangeGuardianTelephone.bind(this);
        this.onChangeGuardianEmail = this.onChangeGuardianEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.houseOptions = [
            {label: "Green", value: "green"},
            {label: "Yellow", value: "yellow"},
            {label: "Brown", value: "brown"},
        ];

        this.transportOptions = [
            {label: "Bus", value: "bus"},
            {label: "Van", value: "van"},
            {label: "Private Vehicle", value: "privateVehicle"},
        ];

        this.state = {
            studentName: "",
            studentID: "",
            email: "",
            password: "",
            dateOfBirth: "",
            admissionNo: "",
            dateOfAdmission: "",
            currentClass: "",
            house: "Green",
            transport: "",
            allergies: "",
            address: "",
            fatherName: "",
            fatherOccupation: "",
            fatherTelephone: "",
            fatherEmail: "",
            motherName: "",
            motherTelephone: "",
            motherOccupation: "",
            motherEmail: "",
            guardianName: "",
            guardianOccupation: "",
            guardianTelephone: "",
            guardianEmail: "",
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

    onChangeCurrentClass(e) {
        this.setState({
            currentClass: e.target.value
        });
    }

    onChangeHouse(e) {
        console.log(e);
        this.setState({
            house: e.value
        });
    }

    onChangeTransport(e) {
        this.setState({
            transport: e.value
        });
        console.log(this.state.transport)
    }

    onChangeAllergies(e) {
        this.setState({
            allergies: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeFatherName(e) {
        this.setState({
            fatherName: e.target.value
        });
    }

    onChangeFatherOccupation(e) {
        this.setState({
            fatherOccupation: e.target.value
        });
    }

    onChangeFatherTelephone(e) {
        this.setState({
            fatherTelephone: e.target.value
        });
    }

    onChangeFatherEmail(e) {
        this.setState({
            fatherEmail: e.target.value
        });
    }

    onChangeMotherName(e) {
        this.setState({
            motherName: e.target.value
        });
    }

    onChangeMotherOccupation(e) {
        this.setState({
            motherOccupation: e.target.value
        });
    }

    onChangeMotherTelephone(e) {
        this.setState({
            motherTelephone: e.target.value
        });
    }

    onChangeMotherEmail(e) {
        this.setState({
            motherEmail: e.target.value
        });
    }

    onChangeGuardianName(e) {
        this.setState({
            guardianName: e.target.value
        });
    }

    onChangeGuardianOccupation(e) {
        this.setState({
            guardianOccupation: e.target.value
        });
    }

    onChangeGuardianTelephone(e) {
        this.setState({
            guardianTelephone: e.target.value
        });
    }

    onChangeGuardianEmail(e) {
        this.setState({
            guardianEmail: e.target.value
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

        const {studentName, studentID, email, password, dateOfBirth,
            admissionNo, dateOfAdmission, currentClass, house,
            transport, allergies, address, fatherName,
            fatherOccupation, fatherTelephone, fatherEmail,
            motherName, motherTelephone, motherOccupation,
            motherEmail, guardianName, guardianOccupation,
            guardianTelephone, guardianEmail} = this.state;

        //Check for errors
        if (studentName === "") {
            this.setState({errors: {studentName: "student Name is required"}});
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
            studentID: this.state.studentID,
            email: this.state.email,
            password: this.state.password,
            dateOfBirth: this.state.dateOfBirth,
            admissionNo: this.state.admissionNo,
            dateOfAdmission: this.state.dateOfAdmission,
            currentClass: this.state.currentClass,
            house: this.state.house,
            transport: this.state.transport,
            allergies: this.state.allergies,
            address: this.state.address,
            fatherName: this.state.fatherName,
            fatherOccupation: this.state.fatherOccupation,
            fatherTelephone: this.state.fatherTelephone,
            fatherEmail: this.state.fatherEmail,
            motherName: this.state.motherName,
            motherTelephone: this.state.motherTelephone,
            motherOccupation: this.state.motherOccupation,
            motherEmail: this.state.motherEmail,
            guardianName: this.state.guardianName,
            guardianOccupation: this.state.guardianOccupation,
            guardianTelephone: this.state.guardianTelephone,
            guardianEmail: this.state.guardianEmail,
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
            studentID: "",
            email: "",
            password: "",
            dateOfBirth: "",
            admissionNo: "",
            dateOfAdmission: "",
            currentClass: "",
            house: "Green",
            transport: "",
            allergies: "",
            address: "",
            fatherName: "",
            fatherOccupation: "",
            fatherTelephone: "",
            fatherEmail: "",
            motherName: "",
            motherTelephone: "",
            motherOccupation: "",
            motherEmail: "",
            guardianName: "",
            guardianOccupation: "",
            guardianTelephone: "",
            guardianEmail: "",
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
                            <div className="card-header-pills">
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
                                        // onChange={value => "this.setState({ transport: value })"}
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
                                    <div className="card-title">
                                        <b> Particulars of Parents/Guardian</b>
                                    </div>
                                    <TextInputGroup
                                        label="Home Address"
                                        name="address"
                                        placeholder=" Home Address"
                                        value={this.state.address}
                                        onChange={this.onChangeAddress}
                                        error={errors.address}
                                    />
                                    <div className="card-subtitle">
                                        <b> Father Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Father's Name"
                                        name="fatherName"
                                        placeholder=" Father's Name"
                                        value={this.state.fatherName}
                                        onChange={this.onChangeFatherName}
                                        error={errors.fatherName}
                                    />
                                    <TextInputGroup
                                        label="Father's Occupation"
                                        name="fatherOccupation"
                                        placeholder=" Father's Occupation"
                                        value={this.state.fatherOccupation}
                                        onChange={this.onChangeFatherOccupation}
                                        error={errors.fatherOccupation}
                                    />
                                    <TextInputGroup
                                        label="Father's Telephone"
                                        name="fatherTelephone"
                                        placeholder=" Father's Telephone"
                                        value={this.state.fatherTelephone}
                                        onChange={this.onChangeFatherTelephone}
                                        error={errors.fatherTelephone}
                                    />
                                    <TextInputGroup
                                        label="Father's Email"
                                        name="fatherEmail"
                                        placeholder=" Father's Email"
                                        value={this.state.fatherEmail}
                                        onChange={this.onChangeFatherEmail}
                                        error={errors.fatherEmail}
                                    />
                                    <div className="card-subtitle">
                                        <b> Mother Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Mother's Name"
                                        name="motherName"
                                        placeholder=" Mother's Name"
                                        value={this.state.motherName}
                                        onChange={this.onChangeMotherName}
                                        error={errors.motherName}
                                    />
                                    <TextInputGroup
                                        label="Mother's Occupation"
                                        name="motherOccupation"
                                        placeholder=" Mother's Occupation"
                                        value={this.state.motherOccupation}
                                        onChange={this.onChangeMotherOccupation}
                                        error={errors.motherOccupation}
                                    />
                                    <TextInputGroup
                                        label="Mother's Telephone"
                                        name="motherTelephone"
                                        placeholder=" Mother's Telephone"
                                        value={this.state.motherTelephone}
                                        onChange={this.onChangeMotherTelephone}
                                        error={errors.motherTelephone}
                                    />
                                    <TextInputGroup
                                        label="Mother's Email"
                                        name="motherEmail"
                                        placeholder=" Mother's Email"
                                        value={this.state.motherEmail}
                                        onChange={this.onChangeMotherEmail}
                                        error={errors.motherEmail}
                                    />
                                    <div className="card-subtitle">
                                        <b> Guardian Details</b>
                                    </div>
                                    <TextInputGroup
                                        label="Guardian's Name"
                                        name="guardianName"
                                        placeholder=" Guardian's Name"
                                        value={this.state.guardianName}
                                        onChange={this.onChangeGuardianName}
                                        error={errors.guardianName}
                                    />
                                    <TextInputGroup
                                        label="Guardian's Occupation"
                                        name="guardianOccupation"
                                        placeholder=" Guardian's Occupation"
                                        value={this.state.guardianOccupation}
                                        onChange={this.onChangeGuardianOccupation}
                                        error={errors.guardianOccupation}
                                    />
                                    <TextInputGroup
                                        label="Guardian's Telephone"
                                        name="guardianTelephone"
                                        placeholder=" Guardian's Telephone"
                                        value={this.state.guardianTelephone}
                                        onChange={this.onChangeGuardianTelephone}
                                        error={errors.guardianTelephone}
                                    />
                                    <TextInputGroup
                                        label="Guardian's Email"
                                        name="guardianEmail"
                                        placeholder=" Guardian's Email"
                                        value={this.state.guardianEmail}
                                        onChange={this.onChangeGuardianEmail}
                                        error={errors.guardianEmail}
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
