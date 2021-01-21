import { greet } from "./greet";

const MyComponent = () => {
  return <div onClick={greet}>Hello World</div>;
};

export default MyComponent;
