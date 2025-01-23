// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Using FlatCompat for compatibility with ESLint configuration extending
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint config
const eslintConfig = {
  overrides: [
    {
      files: ["*.js", "*.mjs", "*.ts", "*.tsx"], // Targeting JS and TS files
      extends: [
        "eslint:recommended",
        "plugin:@next/next/core-web-vitals", // Next.js specific config
        ...compat.extends("next/core-web-vitals"),
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      rules: {
        // Custom rules here
      },
    },
  ],
};

export default eslintConfig;
