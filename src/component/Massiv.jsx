import React, { Component } from "react";
export default class Massiv extends Component {
  state = {
    user: [
      {
        id_: Math.trunc(Math.random() * 999),
        name: "maruf",
        age: 21,
        lastname: "Sayfiyev",
        region: "Samarqand",
        district: "ishtixon",
      },
      {
        id_: Math.trunc(Math.random() * 999),
        name: "Dilshod",
        age: 22,
        lastname: "Murtozoyev",
        region: "Buxoro",
        district: "Kogon",
      },
      {
        id_: Math.trunc(Math.random() * 999),
        name: "maruf",
        age: 21,
        lastname: "Sayfiyev",
        region: "Samarqand",
        district: "ishtixon",
      },
      {
        id_: Math.trunc(Math.random() * 999),
        name: "Dilshod",
        age: 22,
        lastname: "Murtozoyev",
        region: "Buxoro",
        district: "Kogon",
      },
      {
        id_: Math.trunc(Math.random() * 999),
        name: "maruf",
        age: 21,
        lastname: "Sayfiyev",
        region: "Samarqand",
        district: "ishtixon",
      },
      {
        id_: Math.trunc(Math.random() * 999),
        name: "Dilshod",
        age: 22,
        lastname: "Murtozoyev",
        region: "Buxoro",
        district: "Kogon",
      },
    ],
  };
  deletebtn = (i)=>{
    let {user} = this.state
   user.splice(i, 1)
    this.setState({
      user
    })
  }
  render() {
    return (
      <div>
        <table border={"1"} width="100%">
          <thead>
            <tr>
              <th>N</th>
              <th>id_</th>
              <th>Name</th>
              <th>Age</th>
              <th>Lastname</th>
              <th>Region</th>
              <th>District</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((item, index) => 
              <tr key={index}>
                <td>{index +1}</td>
                <td>{item.id_}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.lastname}</td>
                <td>{item.region}</td>
                <td>{item.district}</td>
                <td><button>submit</button></td>
                <td><button onClick={()=>this.deletebtn(index)}>delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
