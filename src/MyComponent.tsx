import React from "react";
import { greet } from "./greet";

class MyComponent extends React.Component {
  render() {
    return <div onClick={greet}>Hello World</div>;
  }
}

export default MyComponent;
