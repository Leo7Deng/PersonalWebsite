<script>
	import location_image from '$lib/images/location_image.png';
</script>

<div class="header">
	<div class="cube-container">
		<div class="cube"></div>
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
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.name {
		font-size: 3rem;
		font-weight: bold;
		margin-top: 5em;
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
		width: 3%;
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
