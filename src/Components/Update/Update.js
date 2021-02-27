import React, { Component } from "react";
import Card from "../UI/Information/Card/Card";

import styles from "./Update.module.css";
import { ReactComponent as Server } from "../../assets/svg/networkServer.svg"
import axios from "axios";

class Update extends Component {

  state = {
    ip: "192.168.1.1",
    port: "5000",
  }

  componentDidMount() {
    this.timerID = setInterval(() => {

      axios.get("database/read")
        .then(res => {
          console.log(res.data);
          this.setState({ ip: res.data.ip, port: res.data.port })
        })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className={styles.update}>
        <div className={styles.title}>Automatic updates</div>
        <div className={styles.cardBox}>
          <Card
            className={styles.border}
            icon={<Server />}
            title="Server"
            ip={`IP address: ${this.state.ip}`}
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
            port={`Port number: ${this.state.port}`}
          />
        </div>
      </div>
    );
  }
}

export default Update;