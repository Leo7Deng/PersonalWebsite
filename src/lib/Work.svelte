<script lang="ts">
	import GitMe from '$lib/images/GitMe.png';
	import aoc from '$lib/images/aoc.png';
	import mercury from '$lib/images/mercury.png';
	import opensearch from '$lib/images/opensearch.jpg';
</script>

<div class="work">
	<h1 class="title">Featured Work.</h1>
	<div class="work-container">
			<div class="work-item">
				<!-- <p class="work-title">GitMe</p> -->
                <div class="work-overlay"></div>
				<img src={GitMe} alt="GitMe" class="work-image" />
			</div>
			<div class="work-item">
				<!-- <p class="work-title">Advent of Code</p> -->
                <div class="work-overlay"></div>
				<img src={aoc} alt="Advent of Code" class="work-image" />
			</div>
			<div class="work-item">
				<!-- <p class="work-title">Mercury Alert AI</p> -->
                <div class="work-overlay"></div>
				<img src={mercury} alt="Mercury Alert AI" class="work-image" />
			</div>
			<div class="work-item">
                <div class="work-overlay"></div>
				<img src={opensearch} alt="Amazon OpenSearch" class="work-image" />
			</div>
	</div>
</div>

<style lang="scss">
	.work {
		.title {
			margin-left: 17vw;
			margin-top: 10vw;
			font-size: 30px;
			font-weight: bold;
		}
	}
	.work-container {
		display: grid;
		grid-template-columns: 0.48fr 1fr 1fr 0.48fr;
		grid-column-gap: 20px;
		grid-row-gap: 20px;
	}
	.work-item:nth-child(odd) {
		grid-column: 2;
	}
	.work-item:nth-child(even) {
		grid-column: 3;
	}
	.work-item {
		background-color: rgb(217, 217, 217);
		padding: 20px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
        position: relative;
	}
    .work-overlay {
	background-color: hsl(194, 95%, 39%);
	opacity: 0;
	z-index: 2;
	position: absolute; 
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 0.5s;
}

.work-overlay:hover {
	opacity: 0.8;
}
	.work-overlay:hover {
		opacity: 0.5;
        transition: 0.5s;
	}
	.work-title {
		display: absolute;
		margin-top: 0px;
		font-size: 30px;
		font-weight: bold;
		color: white;
	}
	.work-image {
		margin-left: auto;
		margin-right: auto;
		width: 300px;
	}
</style>
