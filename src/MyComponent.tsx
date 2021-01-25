import React from "react";
import { greet } from "./greet";

export const MyComponent = () => {
  return <div onClick={greet}>Hello World</div>;
};
