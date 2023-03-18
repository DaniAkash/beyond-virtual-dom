import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { base } from "./base";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base,
});
