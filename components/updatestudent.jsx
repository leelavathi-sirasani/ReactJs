import React, { Component } from "react";
import axios from "axios";

class UpdateStudent extends React.Component {
  state = {
    student: {
      fullName: "",
      contactNo: "",
      email: "",
      password: "",
      role: "",
    },
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8082/students/rollNo/${this.props.match.params.rollNo}`
      )
      .then((res) => {
        const student = { ...this.state.student };
        student.fullName = res.data.fullName;
        student.contactNo = res.data.contactNo;
        student.email = res.data.login.email;
        student.password = res.data.login.password;
        student.role = res.data.role;
        console.log(res.data);
        console.log(student);
        this.setState({ student: student });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const student = { ...this.state.student }; // copying student object
    student[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ student: student });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const student = {
      contactNo: this.state.student.contactNo,
      fullName: this.state.student.fullName,
      login: {
        email: this.state.student.email,
        password: this.state.student.password,
        role: this.state.student.role,
      },
      rollNo: this.props.match.params.rollNo,
    };
    axios
      .put(
        `http://localhost:8082/students/${this.props.match.params.rollNo}`,
        student
      )
      .then((res) => {
        this.props.history.push("/student");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Update Student</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.student.fullName}
              name="fullName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.student.contactNo}
              name="contactNo"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.student.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.student.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.student.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateStudent;
