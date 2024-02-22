<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import GitMe from '$lib/images/GitMe.png';
	import aoc from '$lib/images/aoc.png';
	import mercury from '$lib/images/mercury.png';
	import opensearch from '$lib/images/opensearch.png';
	import mlp from '$lib/images/mlp.png';
	import raytheon from '$lib/images/raytheon.png';
	import usaco from '$lib/images/usaco.png';
	import scl from '$lib/images/scl.png';
	import vitu from '$lib/images/vitu.png';
	import spotifysifter from '$lib/images/spotifysifter.png';
	let isOpen = false;
	let content = '';

	const works = [
		{ id: 1, title: 'GitMe', description: 'GitMe is a GitHub repository summary tool for resume planning with Github and ChatGPT API in React and Python. I implemented frontend homepage features, routing with React Router, and input to fetch backend endpoint. I also lead project workflow and organized team structure with Figma and GitHub; presented project demo', image: GitMe },
		{ id: 2, title: 'Advent of Code', description: 'Description for Advent of Code', image: aoc },
		{ id: 3, title: 'Mercury Alert AI', description: 'Description for Mercury', image: mercury },
		{ id: 4, title: 'Amazon OpenSearch', description: 'Description for OpenSearch', image: opensearch },
		{ id: 5, title: 'Machine Learning @ Purdue', description: 'Description for MLP', image: mlp },
		{ id: 6, title: 'Raytheon', description: 'Description for Raytheon', image: raytheon },
		{ id: 7, title: 'USACO', description: 'Description for USACO', image: usaco },
		{ id: 8, title: 'Sustainable Computing Laboratory', description: 'Description for SCL', image: scl },
		{ id: 9, title: 'Vitu', description: 'Description for Vitu', image: vitu },
		{ id: 10, title: 'Spotify Sifter', description: 'Description for Spotify Sifter', image: spotifysifter }
	];

	function openModal(work: any) {
		content = `<h2>${work.title}</h2><p>${work.description}</p><img src="${work.image}" alt="${work.title}" style="max-width:100%;">`;
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}
</script>

<div class="work">
	<h1 class="title">My Projects.</h1>
	<div class="work-container">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each works as work}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="work-item" on:click={() => openModal(work)}>
				<div class="work-overlay"></div>
				<img src={work.image} alt={work.title} class="work-image" />
			</div>
		{/each}
	</div>
</div>

<Modal {isOpen} {content} onClose={closeModal} />

<style lang="scss">
	@import 'normalize.css';
	.work {
		margin-bottom: 50px;
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
		width: 450px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 8px;
	}
	.work-overlay {
		background-color: hsl(0, 0%, 22%);
		opacity: 0;
		z-index: 2;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: opacity 0.5s;
		border-radius: 8px;
	}

	.work-overlay:hover {
		opacity: 0.6;
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
	.work-item:nth-child(4) .work-image {
		width: 400px;
	}
	.work-item:nth-child(5) .work-image {
		width: 400px;
	}
	.work-item:nth-child(6) .work-image {
		width: 430px;
	}
	.work-item:nth-child(10) .work-image {
		width: 400px;
	}
</style>
