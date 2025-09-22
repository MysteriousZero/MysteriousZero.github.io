import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // folder for HTML output
			assets: 'build', // folder for JS/CSS/assets
			fallback: null // optional: set to '200.html' if SPA routing is needed
		})
	}
};

export default config;