<script lang="ts">
	import locationImage from '$lib/images/location_image.png';
	import Cube from '$lib/Cube.svelte';
	import { cubeData } from './stores';
</script>

<div class="header">
	<div class="cube-container">
		{#each $cubeData as cube}
			<Cube size={cube.size} rotate={cube.rotate} x={cube.x} y={cube.y} />
		{/each}
	</div>
	<h1 class="name">Hi 👋, I'm Leo.</h1>
	<div class="location">
		<img src={locationImage} class="location-image" alt="location" />
		<h4>Los Angeles, CA</h4>
	</div>
	<div class="about-header">
		<p>
			I'm currently a student at <span>Purdue</span>, studying <span>computer science</span> in the machine
			intelligence and software engineering tracks.
		</p>
	</div>
</div>

<style lang="scss">
	@import 'normalize.css';
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

			span {
				color: hsl(198, 100%, 43%);
				font-weight: 800;
			}
		}
	}
</style>
