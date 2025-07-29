import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  integrations: [tailwind()],
  // output: "server", // Optional: remove or adjust based on your needs
  // adapter: vercel({...}) // Removed
});
