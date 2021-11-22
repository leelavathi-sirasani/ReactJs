import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Student extends React.Component {
  state = {
    students: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8082/students")
      .then((response) => {
        console.log(response);
        this.setState({ students: response.data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (id) => {
    axios.delete(`http://localhost:8082/students/${id}`).then((res) => {
      const students = this.state.students.filter((std) => std.rollNo != id);
      this.setState({ students: students });
    });
  };
  render() {
    return (
      <div className="container">
        <Link
          to="/students/add"
          className="btn btn-secondary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>FullName</th>
              <th>ContactNo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr>
                <td>{student.rollNo}</td>
                <td>{student.fullName}</td>
                <td>{student.contactNo}</td>
                <td>
                  <Link to={`/students/update/${student.rollNo}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(student.rollNo)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
