import markdown from "@eslint/markdown";
import { readGitignoreFiles } from "eslint-gitignore";
import perfectionist from "eslint-plugin-perfectionist";

const { npm_lifecycle_event } = process.env;
const strictMode =
  npm_lifecycle_event.includes("lint") || npm_lifecycle_event.includes("build");

export default [
  { files: ["**/*.{js,vue}"] },
  { ignores: [...readGitignoreFiles(), "*.min.*"] },
  {
    rules: {
      "no-console": [strictMode ? "warn" : "off", { allow: ["error"] }],
      "no-debugger": strictMode ? "warn" : "off",
    },
  },
  perfectionist.configs["recommended-natural"],
  ...markdown.configs.processor,
];
