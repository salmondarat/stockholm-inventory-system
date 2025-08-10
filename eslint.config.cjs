const js = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "dist/**", 
      ".next/**", 
      "build/**", 
      "**/*.d.ts",
      "**/postcss.config.js",
      "**/tailwind.config.js",
      "frontend/**",
      "backend/**",
      "website/.next/**",
      "website/next.config.js",
      "pnpm-lock.yaml"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js globals
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        console: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        // Browser globals  
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        // Web APIs
        URL: "readonly",
        URLSearchParams: "readonly",
        Headers: "readonly",
        Request: "readonly",
        Response: "readonly",
        AbortController: "readonly",
        AbortSignal: "readonly",
        performance: "readonly",
        TextEncoder: "readonly",
        TextDecoder: "readonly",
        // Browser DOM APIs
        HTMLElement: "readonly",
        ResizeObserver: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "error"
    }
  }
];
