import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const eslintConfig = [
  compat.extends("eslint:recommended"),
  compat.extends("plugin:@next/next/core-web-vitals"),
  {
    // Custom configuration rules
    files: ["*.js", "*.mjs", "*.ts", "*.tsx"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // Custom rules here
    },
  },
];

export default eslintConfig;
