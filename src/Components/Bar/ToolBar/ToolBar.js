import React from "react";
import Icon from "rsuite/lib/Icon";

import toolItems from "./utilities/toolItems";
import styles from "./ToolBar.module.css";

const ToolBar = () => (
  <div className={styles.toolBar}>
    {
      toolItems.map((group, i) =>
        <div className={styles.group} key={i}>
          {
            group.map((el, j) =>
              <div key={j}>
                <Icon size="lg" icon={el} />
              </div>
            )
          }
        </div>
      )
    }
  </div>
);

export default ToolBar;