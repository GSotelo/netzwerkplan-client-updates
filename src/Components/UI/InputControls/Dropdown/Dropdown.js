import React from "react";
import Dropdown from "rsuite/lib/Dropdown";
import Icon from "rsuite/lib/Icon";

import "./Dropdown.css"

const { Item } = Dropdown;

const CustomDropdown = ({ items, title }) => (
  <Dropdown title={title}>
    {
      items.map((item, index) => (
        item.description !== "divider"
          ? <Item key={index} icon={<Icon icon={item.icon} />}>{item.description}</Item>
          : <Item key={index} divider />
      ))
    }
  </Dropdown>
);

export default CustomDropdown;
