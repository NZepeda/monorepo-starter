import React from 'react';

const greet = (name) => {
    console.log("Hello world!");
};

const MyComponent = () => {
    return React.createElement("div", { onClick: () => greet() }, "Hello World");
};

export { MyComponent, greet };
