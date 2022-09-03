import React from "react";

export interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
  return <button>{props.children}</button>;
};
