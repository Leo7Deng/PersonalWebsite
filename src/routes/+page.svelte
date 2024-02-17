<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Header2 from '$lib/Header2.svelte';
	import Work from '$lib/Work.svelte';
	import { onMount } from 'svelte';
	import { cubeData, initialCubeData } from '$lib/stores';

	onMount(() => {
		setTimeout(() => {
			document.body.onscroll = () => {
				let elementClientHeight = document.documentElement.clientHeight;
				let scrollPercentage = Math.min(
					0.8,
					document.documentElement.scrollTop / elementClientHeight
				);
				$cubeData.forEach((cube, i) => {
					// cube.x = $initialCubeData[i].x * (1 + scrollPercentage * 0.6);
					// cube.y = $initialCubeData[i].y * (1 + scrollPercentage * 0.3);
					// the larger the x, the less it moves
					// the larger the y, the more it moves
					cube.x = $initialCubeData[i].x * (1 + scrollPercentage / (Math.abs($initialCubeData[i].x) / 50));
					cube.y = $initialCubeData[i].y * (1 + scrollPercentage / (Math.abs($initialCubeData[i].y) / 20));
					cube.size = $initialCubeData[i].size * (1 + scrollPercentage * 0.2);
					cube.rotate = $initialCubeData[i].rotate + scrollPercentage * 80;
				});
				$cubeData = $cubeData;
			};
		}, 1000);
	});
</script>

<div id="scroller">
	<Header2></Header2>
	<Work></Work>
	<!-- <Header></Header>
	<About></About> -->
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
