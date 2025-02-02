import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
// import json from "rollup-plugin-json";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    name: "$",
    format: "umd",
    // This is because we use default and named exports at the same time. The
    // commonjs will have to import with ['default'], but no problem for ESM
    exports: "named",

    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "react-dom/test-utils": "testUtils",
    },
  },
  external: ["react", "react-dom", "react-dom/test-utils"],
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs({ namedExports: { "react-dom/test-utils": ["act"] } }),
  ],
};
