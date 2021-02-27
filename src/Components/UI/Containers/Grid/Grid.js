import React from "react";

import "./Grid.css";

const Grid = ({ groups, title }) => {
  return (
    <div className="grid">
      <div className="title">{title}</div>
      <div className="groupBox">
        {
          groups.map((group,i) =>
            <div key={i} className="row" >
              {
                group.map((el,j) => <div key={j} className="col">{el}</div>)
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Grid;