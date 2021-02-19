import React from "react";
import { greet } from "./greet";

const MyComponent = () => {
  return <div onClick={() => greet("nestor")}>Hello World</div>;
};

export default MyComponent;
