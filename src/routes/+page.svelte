<script lang="ts">
	import Header2 from '$lib/Header2.svelte';
	import Work from '$lib/Work.svelte';
	import { onMount } from 'svelte';
	import { cubeData, initialCubeData } from '$lib/stores';
</script>

<div id="scroller">
	<Header2></Header2>
	<Work></Work>
</div>

<style global lang="scss">
	@import 'normalize.css';
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(code) {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
</style>
