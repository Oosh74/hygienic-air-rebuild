import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
	site: "https://www.hygienicairplus.com",
	build: {
		format: "file",
	},
	vite: {
		optimizeDeps: {
			entries: ["src/**/*.{astro,js,jsx,ts,tsx,md,mdx}"],
		},
	},
	integrations: [
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
});
