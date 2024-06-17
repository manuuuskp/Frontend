import React from "react";

type Value = string | number | boolean | (() => void);

const CustomSwitch = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Value;
}) => {
  const custom: React.ReactElement[] = [];
  const defaultArr: React.ReactElement[] = [];
  React.Children.forEach(children, (e: React.ReactNode) => {
    if (e.key === "custom") {
      if (typeof e.props.value === "function") {
        if (e.props.value() === value) {
          custom.push(e);
        }
      } else {
        if (e.props.value === value) {
          custom.push(e);
        }
      }
    } else {
      defaultArr.push(e);
    }
  });

  return <div>{custom.length > 0 ? custom : defaultArr}</div>;
};

CustomSwitch.CustomCase = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Value;
}) => {
  return <>{children}</>;
};

CustomSwitch.DefaultCase = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Value;
}) => {
  return <>{children}</>;
};

export default CustomSwitch;
