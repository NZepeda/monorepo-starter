'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const greet = (name) => {
    console.log("Hello world!");
};

const MyComponent = () => {
    return React__default['default'].createElement("div", { onClick: () => greet() }, "Hello World");
};

exports.MyComponent = MyComponent;
exports.greet = greet;
