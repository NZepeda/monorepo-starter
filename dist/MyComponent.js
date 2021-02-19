import React from "react";
import { greet } from "./greet";
const MyComponent = () => {
    return React.createElement("div", { onClick: () => greet("nestor") }, "Hello World");
};
export default MyComponent;
