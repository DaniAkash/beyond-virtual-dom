import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export const base = "/beyond-virtual-dom";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: "/",
});
