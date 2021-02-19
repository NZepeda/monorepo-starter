import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
    },
  ],
  plugins: [resolve({ extensions }), commonjs({ extensions }), typescript()],
};
