// import axios from "axios";

// import React, { Component } from "react";

// class Usersform extends React.Component {
//   state = {
//     Users: {
//       userid: "",
//       firstName: "",
//       lastName: "",
//       mobileno: "",
//       email: "",
//       password: "",
//     },
//   };
//   handleChange = (event) => {
//     const student = { ...this.state.Users }; // copying student object
//     student[event.target.name] = event.target.value; // student[fullName] = "ab"
//     //student.fullName = "ab";
//     //student[fullName]="ab";
//     console.log(event.target.name);
//     console.log(event.target.value);
//     this.setState({ users: Users });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("handleSubmit");
//     axios
//       .post("http://localhost:8080/lms/viewuserslist", this.state.Users)
//       .then((res) => {
//         this.props.history.push("/users");
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h3>Register Form</h3>
//         <form onSubmit={this.handleSubmit} className=" w-50 mx-auto border p-3">
//           <div className="mb-3">
//             <label for="exampleInputName" className="form-label">
//               FirstName
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputName"
//               value={this.state.Users.firstName}
//               name="firstName"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputName" className="form-label">
//               LastName
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputName"
//               value={this.state.Users.lastName}
//               name="lastName"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputMobileNo" className="form-label">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               className="form-control"
//               id="exampleInputContactNo"
//               aria-describedby="emailHelp"
//               value={this.state.Users.mobileno}
//               name="mobileno"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               value={this.state.Users.email}
//               name="email"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               value={this.state.Users.password}
//               name="password"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputDateOfBirth" className="form-label">
//               Date OF Birth
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="exampleInputDateOfBirth"
//               value={this.state.Users.dateofbirth}
//               name="dateofbirth"
//               onChange={this.handleChange}
//             />
//           </div>

//           <select
//             className="form-select mb-3"
//             aria-label="Default select example"
//             value={this.state.Users.userid}
//             name="userid"
//             onChange={this.handleChange}
//           >
//             <option selected>Select Role</option>
//             <option value="users">Users</option>
//             <option value="admin">Admin</option>
//           </select>
//           <div class="d-grid gap-2">
//             <button type="submit" class="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Usersform;
