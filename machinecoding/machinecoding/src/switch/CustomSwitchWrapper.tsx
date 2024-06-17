import React from "react";
import CustomSwitch from "./CustomSwitch";

const CustomSwitchWrapper = () => {
  return (
    <CustomSwitch value={1000}>
      <CustomSwitch.CustomCase value={100} key="custom">
        <h1>Custom case 1</h1>
      </CustomSwitch.CustomCase>
      <CustomSwitch.CustomCase value={1000} key="custom">
        <h1>Custom case 2</h1>
      </CustomSwitch.CustomCase>
      <CustomSwitch.DefaultCase value={500} key="default">
        <h1>Default case 1</h1>
      </CustomSwitch.DefaultCase>
    </CustomSwitch>
  );
};

export default CustomSwitchWrapper;
