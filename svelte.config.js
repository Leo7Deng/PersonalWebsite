import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static'; // Assuming you are using the static adapter

const config = {
	preprocess: sveltePreprocess({
		scss: {
			// SCSS options here
		},
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
		})
	}
};

export default config;
