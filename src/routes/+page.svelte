<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Work from '$lib/Work.svelte';
</script>

<div>
	<Header></Header>
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
		background-color: hsl(0, 0%, 98%);
	}

	:global(code) {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

</style>
