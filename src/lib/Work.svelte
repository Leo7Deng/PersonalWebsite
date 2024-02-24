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
	import { writable } from 'svelte/store';

	let isOpen = false;
	const currentProject = writable({ title: '', description: '', image: '' });
	function openModal(project: string, description: string, image: string) {
		currentProject.set({ title: project, description: description, image: image });
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}

	const works = [
		{ id: 6, title: 'Raytheon', description: 'Description for Raytheon', image: raytheon },
		{
			id: 4,
			title: 'Amazon OpenSearch',
			description: 'Description for OpenSearch',
			image: opensearch
		},
		{
			id: 10,
			title: 'Spotify Sifter',
			description: 'Description for Spotify Sifter',
			image: spotifysifter
		},
		{ id: 5, title: 'Machine Learning @ Purdue', description: 'Description for MLP', image: mlp },
		{ id: 3, title: 'Mercury Alert AI', description: 'Description for Mercury', image: mercury },
		{
			id: 1,
			title: 'GitMe',
			description:
				'GitMe is a GitHub repository summary tool for resume planning with Github and ChatGPT API in React and Python. I implemented frontend homepage features, routing with React Router, and input to fetch backend endpoint. I also lead project workflow and organized team structure with Figma and GitHub; presented project demo',
			image: GitMe
		},
		{ id: 2, title: 'Advent of Code', description: 'Description for Advent of Code', image: aoc },
		{
			id: 8,
			title: 'Sustainable Computing Laboratory',
			description: 'Description for SCL',
			image: scl
		},
		{ id: 9, title: 'Vitu', description: 'Description for Vitu', image: vitu },
		{ id: 7, title: 'USACO', description: 'Description for USACO', image: usaco }
	];
</script>

<div class="work">
	<h1 class="title">My Projects.</h1>
	<div class="work-container">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each works as work}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="work-item" on:click={() => openModal(work.title, work.description, work.image)}>
				<div class="work-overlay"></div>
				<img src={work.image} alt={work.title} class="work-image" />
			</div>
		{/each}
	</div>
</div>

<Modal {isOpen} onClose={closeModal}>
	{#if $currentProject.title === 'Raytheon'}
		<div>
			<h2>{$currentProject.title}</h2>

			<p>{$currentProject.description}</p>
			<p>soiengoiasen</p>
			piseagnpoeng
			<img src={$currentProject.image} alt="Raytheon" style="max-width: 100%;" />
		</div>
	{:else if $currentProject.title === 'GitMe'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				<a href="https://github.com/Leo7Deng/GitMe" target="_blank">Gitme</a> is a GitHub
				repository summary tool for resume planning using the Github api and OpenAI/ChatGPT API. The
				frontend was built in React and the backend was made with Flask. This project was built in
				Fall 2023, for the
				<a href="https://www.instagram.com/helloworldpurdue/?hl=en" target="_blank"
					>Hello World Hackathon</a
				>, and was awarded 3rd place. The video below is a demo of the project.
			</p>
			<iframe
				class="video"
				src="https://www.youtube.com/embed/pVMx1xTw0Wg"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	{:else}
		<div>
			<h2>{$currentProject.title}</h2>
			<p>{$currentProject.description}</p>
		</div>
	{/if}
</Modal>

<style lang="scss">
	@import 'normalize.css';
	.work {
		margin-top: -90px;
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
		background-color: rgb(213, 213, 213);
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
	.work-item:nth-child(2) .work-image {
		width: 400px;
	}
	.work-item:nth-child(4) .work-image {
		width: 400px;
	}
	.work-item:nth-child(1) .work-image {
		width: 430px;
	}
	.work-item:nth-child(3) .work-image {
		width: 400px;
	}
	.video {
		margin-left: auto;
		margin-right: auto;
		display: block;
		width: 600px;
		height: 400px;
		margin-top: 40px;
	}
	.description {
		line-height: 25px;
		font-weight: 500;
	}
	.modal-div {
		width: 90%;
		// center the modal
		margin: 0 auto;
	}
	a {
		color: hsl(198, 100%, 43%);
	}
</style>
