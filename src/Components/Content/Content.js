import React from "react";
import Form from "../UI/Form/Form";
import Network from "../Network/Network";
import AutomaticUpdate from "../Update/Update";

import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.formBox}>
        <Form />
        <AutomaticUpdate />
      </div>
      <div className={styles.networkBox}><Network /></div>
    </div>
  );
}

export default Content;