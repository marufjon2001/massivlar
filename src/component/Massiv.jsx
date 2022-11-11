import React, { Component } from "react";

export default class Massiv extends Component {
  state = {
    valin: "",
    last: "",
    age1: "",
    email1: "",
    active: false,
    data: [],
  };
  nameinput = (i) => {
    this.setState({
      valin: i.target.value,
    });
  };
  lastinput = (a) => {
    this.setState({
      last: a.target.value,
    });
  };
  ageinput = (m) => {
    this.setState({
      age1: m.target.value,
    });
  };
  emailinput = (i) => {
    this.setState({
      email1: i.target.value,
    });
  };

  Addbtn = (m) => {
    let { data, valin, last, age1, email1 } = this.state;
    data.push({
      name: valin,
      LastName: last,
      Age: email1,
      Email: email1,
    });
    this.setState({
      data,
    });
  };
  delbtn = (e) => {
    let { data } = this.state;
    data.splice(e, 1);
    this.setState({
      data,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div className="top">
            <h4>Name</h4>
            <input type="text" onChange={this.nameinput} />
            <h4>Last Name</h4>
            <input type="text" onChange={this.lastinput} />
          </div>
          <div></div>
          <div className="bottom">
            <h4>Age</h4>
            <input type="text" onChange={this.ageinput} />
            <h4>Email</h4>
            <input type="text" onChange={this.emailinput} />
            <br />
            <br />
            <br />
            <input
              type="submit"
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "15px",
                background: "green",
              }}
              onClick={this.Addbtn}
            />
          </div>
        </div>
        <table
          border={1}
          style={{
            width: "60%",
            border: "2",
            marginLeft: "18%",
            marginTop: "5%",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>LastNAme</th>
              <th>Age</th>
              <th>Email</th>
              <th colSpan={2} width="50px"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.lenght !== 0
              ? this.state.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Age}</td>
                    <td>{item.Email}</td>
                    <td>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.delbtn(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    );
  }
}
