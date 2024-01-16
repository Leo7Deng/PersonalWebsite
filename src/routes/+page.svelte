<script lang="ts">
	import location_image from '$lib/images/location_image.png';
	import Cube from '$lib/Cube.svelte';
	let cubeData = [
		{ size: 40, rotate: 25, x: 450, y: -120 },
		{ size: 30, rotate: 30, x: -430, y: 180 },
		{ size: 25, rotate: 50, x: 10, y: 200 },
		{ size: 45, rotate: 40, x: -340, y: -70 },
		{ size: 50, rotate: 65, x: 430, y: 180 },
		{ size: 26, rotate: 75, x: 150, y: 140 },
		{ size: 28, rotate: 30, x: -550, y: -50 },
		{ size: 48, rotate: 55, x: 310, y: -230 },
		{ size: 30, rotate: 10, x: -50, y: -180 },
        { size: 30, rotate: 20, x: -350, y: -200 }
	];
</script>

<div class="header">
	<div class="cube-container">
		{#each cubeData as cube}
			<Cube size={cube.size} rotate={cube.rotate} x={cube.x} y={cube.y} />
		{/each}
	</div>
	<h1 class="name">Hi 👋, I'm Leo.</h1>
	<div class="location">
		<img src={location_image} class="location-image" alt="location" />
		<h4>Los Angeles, CA</h4>
	</div>
	<div class="about-header">
		<p>
			I'm currently a student at Purdue, studying computer science in the machine intelligence and
			software engineering tracks.
		</p>
	</div>
</div>

<style lang="scss">
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

	.header {
		height: 100dvh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		.cube-container {
			position: absolute;
			z-index: -1;
		}
	}

	.name {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 0;
	}

	.location {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 1.5em;
	}

	.location-image {
		width: 30px;
	}

	.about-header {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 30em;
		text-align: center;
		font-size: 0.9em;
		font-weight: 500;
	}
</style>
