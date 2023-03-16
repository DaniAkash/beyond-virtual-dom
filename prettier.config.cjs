module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
  ],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
