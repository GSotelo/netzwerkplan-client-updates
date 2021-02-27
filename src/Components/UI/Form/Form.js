import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: "",
      ip: "",
      port: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit(e) {
    const data = {
      title: e.target.deviceName.value,
      ip: e.target.ip.value,
      port: e.target.port.value,
      description: e.target.description.value
    }
    axios.post("database/write", data)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <span className="formatTittle">Editable network</span>
        <label className="label">
          Device name:
          <input autocomplete="off" type="text" value={this.state.deviceName} name="deviceName" onChange={this.handleChange} />
        </label>
        <label className="label">
          IP address:
          <input autocomplete="off" type="text" value={this.state.ip} name="ip" onChange={this.handleChange} />
        </label>
        <label className="label">
          Port number:
          <input autocomplete="off" type="text" value={this.state.port} name="port" onChange={this.handleChange} />
        </label>
        <label className="label">
          Description:
          <input autocomplete="off" type="text" value={this.state.description} name="description" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="btn" />
      </form>

    );
  }
}

export default Form;