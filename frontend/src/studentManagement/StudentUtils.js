var onChangeStudentName = function(e) {
    this.setState({
        studentName: e.target.value
    });
}
  
var onChangeStudentID = function(e) {
    this.setState({
        studentID: e.target.value
    });
}

var onChangeEmail = function(e) {
    this.setState({
        email: e.target.value
    });
}
var onChangePassword  = function(e) {
    this.setState({
        password: e.target.value
    });
}
var onChangeNic  = function(e) {
    this.setState({
        nic: e.target.value
    });
}

exports.onChangeStudentName = onChangeStudentName;
exports.onChangeStudentID = onChangeStudentID;
exports.onChangeEmail = onChangeEmail;
exports.onChangePassword = onChangePassword;
exports.onChangeNic = onChangeNic;