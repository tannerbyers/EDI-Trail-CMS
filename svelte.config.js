import adapter from '@sveltejs/adapter-auto'; // TODO: This should point to the specific deploy target to reduce load times but we'll try netlify for now and use auto.
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
