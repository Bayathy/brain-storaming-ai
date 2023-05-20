import linaria from "@linaria/rollup";
import react from "@vitejs/plugin-react";
import css from "rollup-plugin-css-only";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
    css({ output: "styles.css" }),
  ],
});
