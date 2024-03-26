import { Button as AntButton } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import type { PropsWithChildren } from "react";
import "./style.css";
export type TShape =
  | "square"
  | "rectangle"
  | "circle"
  | "oval"
  | "trapezoid"
  | "parallelogram"
  | "triangle-up"
  | "triangle-down"
  | "triangle-left"
  | "triangle-right";

interface ButtonProps {
  size?: "normal" | "big" | "bigger";
  disabled?: boolean;
  shape: TShape;
}

const Button: React.FC<
  ButtonProps & BaseButtonProps["type"] & React.ComponentPropsWithoutRef<"button"> & PropsWithChildren & any
> = ({ children, shape, ...other }) => {
  return (
    <AntButton {...other} style={{ height: "100px" }}>
      {shape && <div className={shape}></div>}
      {children && <div>{children}</div>}
    </AntButton>
  );
};

export default Button;
