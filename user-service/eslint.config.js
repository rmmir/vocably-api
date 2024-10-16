import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        ignores: ["node_modules/", "dist/", "build/", "*.min.js"],
    },
    {
        files: ["**/*.js", "**/*.ts"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            "prettier/prettier": ["error", { tabWidth: 4 }],
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
];
