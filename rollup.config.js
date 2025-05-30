import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default{
  input: "src/app.ts",
  output: {
    file: "dist/app.js",
    format: "cjs"
  },
  plugins: [
    typescript(),
    nodeResolve({
      exportConditions: ["node"]
    }),
    commonjs(),
    json()
  ]
}