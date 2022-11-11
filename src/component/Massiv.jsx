import React, { Component } from "react";

export default class Massiv extends Component {
  state = {
    valin: "",
    last: "",
    age1: "",
    email1: "",
    del: [],
    data: [
      {
        name: "",
        LastName: "",
        Age: "",
        Email: "",
        edit: "edit",
        delete: "delete",
      },
    ],
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
      name: "",
      LastName: "",
      Age: "",
      Email: "",
    });
    this.setState({
      name: valin,
      LastName: last,
      Age: age1,
      Email: email1,
      edit: "edit",
      delete: "delete",
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
        <button
          style={{
            width: "100px",
            borderRadius: "10px",
            height: "20px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
          onClick={this.Adduser}
        >
          add user
        </button>
        <button
          style={{ width: "100px", borderRadius: "10px", height: "20px" }}
        >
          close
        </button>
        <div
          className="navbar"
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            marginLeft: "20%",
            marginTop: "5%",
            // display: "none"
          }}
        >
          <div className="top">
            <h4>Name</h4>
            <input type="text" onChange={this.nameinput} />
            <h4>Last Name</h4>
            <input type="text" onChange={this.lastinput} />
          </div>
          <div>
            <input
              type="submit"
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "15px",
                marginTop: "20px",
                marginTop: "150px",
                background: "green",
              }}
              onClick={this.Addbtn}
            />
          </div>
          <div className="bottom">
            <h4>Age</h4>
            <input type="text" onChange={this.ageinput} />
            <h4>Email</h4>
            <input type="text" onChange={this.emailinput} />
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
              <th colSpan={2}></th>
            </tr>
            {this.state.data.lenght !== 0
              ? this.state.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Age}</td>
                    <td>{item.Email}</td>
                    <td>
                      <button>{this.state.edit}</button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.delbtn(index);
                        }}
                      >
                        {this.state.delete}
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
          </thead>
          <tbody>
            <tr>
              <td>{this.state.name}</td>
              <td>{this.state.LastName}</td>
              <td>{this.state.age}</td>
              <td>{this.state.Email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
