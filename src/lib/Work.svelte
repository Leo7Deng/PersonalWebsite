<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import GitMe from '$lib/images/GitMe.png';
	import aoc from '$lib/images/aoc.png';
	import mercury from '$lib/images/mercury.png';
	import opensearch from '$lib/images/opensearch.png';
	import mlp from '$lib/images/mlp.png';
	import raytheon from '$lib/images/raytheon.png';
	import usaco from '$lib/images/usaco.png';
	import usacoDescription from '$lib/images/usaco-description.png';
	import scl from '$lib/images/scl.png';
	import vitu from '$lib/images/vitu.png';
	import spotifysifter from '$lib/images/spotifysifter.png';
	import beforeConfusion from '$lib/images/before-confusion.png';
	import afterConfusion from '$lib/images/after-confusion.png';
	import { writable } from 'svelte/store';
	import mercuryDescription from '$lib/images/mercury-description.png';
	import aocDescription from '$lib/images/aoc-description.png';
	import sclDescription from '$lib/images/scl-description.png';
	import vituDescription from '$lib/images/vitu-description.png';

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
		{ title: 'Raytheon', description: 'Data Science Researcher', image: raytheon },
		{ title: 'Amazon OpenSearch', description: 'Open Source Contributor Initiative Intern', image: opensearch},
		{ title: 'Spotify Sifter', description: 'Fullstack Developer', image: spotifysifter },
		{ title: 'Machine Learning @ Purdue', description: 'Vice Executive of Finance', image: mlp },
		{ title: 'Mercury Alert AI', description: 'Machine Learning Engineering Intern', image: mercury },
		{ title: 'GitMe', description: 'Fullstack Developer', image: GitMe },
		{ title: 'Advent of Code', description: 'Rust Hobbyist', image: aoc },
		{ title: 'Sustainable Computing Laboratory', description: 'Machine Learning Research Intern', image: scl },
		{ title: 'Vitu', description: 'Software Engineer', image: vitu },
		{ title: 'USACO', description: 'Data Structures and Algorithms Competitor', image: usaco }
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
				<h2 class="work-description">{work.description}</h2>
				<div class="work-overlay"></div>
				<img src={work.image} alt={work.title} class="work-image" />
			</div>
		{/each}
		<p class="footer">Leo Deng © 2024</p>
	</div>
</div>

<Modal {isOpen} onClose={closeModal}>
	{#if $currentProject.title === 'Raytheon'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				As part of Purdue's Data Mine program, I worked with Raytheon as a data researcher to
				develop a machine learning model to predict the Technology Readiness Level (TRL) of a
				technology. I used Python, Jupyter Notebook, and the Scikit-learn library to develop the
				model. I developed the code to present confusion matrices to pinpoint the model's accuracy
				and error. I then developed a custom focal loss function to handle the class imbalance in
				the dataset. The images below display the before and after confusion matrix of the custom
				focal loss function.
			</p>
			<div class="raytheon-image-container">
				<img class="raytheon-image" src={beforeConfusion} alt="Before Confusion" />
				<img class="raytheon-image" src={afterConfusion} alt="After Confusion" />
			</div>
		</div>
	{:else if $currentProject.title === 'Amazon OpenSearch'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				I joined AWS OpenSearch as part of the Open Source Contributor Initiative. I contributed to
				the <a href="https://github.com/opensearch-project/OpenSearch-Dashboards"
					>OpenSearch Dashboards</a
				> team where I improved the pull request workflow by requiring a number of reviews and removed
				the unecessary checks before merging. This increased the development efficiency and integration
				for future company contributions. I also fixed bugs and improved the codebase by refactoring
				and writing tests. I worked with the team to review and merge pull requests and participated
				in team meetings to discuss project progress and future goals.
			</p>
			<embed class="opensearch-embed" src="https://opensearch.org/docs/latest/dashboards/" />
		</div>
	{:else if $currentProject.title === 'GitMe'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				<a href="https://github.com/Leo7Deng/GitMe" target="_blank">Gitme</a> is a GitHub repository
				summary tool for resume planning using the Github api and OpenAI/ChatGPT API. The frontend
				was built in React and the backend was made with Flask. This project was built in Fall 2023,
				for the
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
	{:else if $currentProject.title === 'USACO'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				USACO is the national computing olympiad. I first started competing in USACO in January of
				2022 where I competed in the bronze division, and passed. My next competition was the USACO
				2022 US Open Contest, Silver Division. I passed the open contest and am currently in the
				gold divison. You can check out my solutions <a
					href="https://github.com/Leo7Deng/USACO"
					target="_blank">here</a
				>.
			</p>
			<img class="usaco-image" src={usacoDescription} alt="USACO" />
		</div>
	{:else if $currentProject.title === 'Spotify Sifter'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				Spotify Sifter is a web application that allows users to sift through large playlists and
				remove frequently skipped songs. The frontend was built in React and the backend was made
				with Flask. It is hosted on Railway and uses the Spotify API. You can check out the open
				source code <a href="https://github.com/Leo7Deng/SpotifySifter" target="_blank">here</a>.
			</p>
			<embed src="https://spotifysifter.com" />
		</div>
	{:else if $currentProject.title === 'Machine Learning @ Purdue'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				I am currently the Treasurer of Machine Learning @ Purdue. I manage club finances and
				company outreach to promote club participation in machine learning projects. I am also
				currently managing the finances of ML@P's first ever AI x Business hackathon, <a
					href="http://catapulthacks.com/">Catapult</a
				>.
			</p>
			<embed class="mlp-embed" src="https://ml-purdue.github.io" />
		</div>
	{:else if $currentProject.title === 'Mercury Alert AI'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				Mercury Alert AI is a fast growing startup that uses machine learning to monitor elderly
				patients. It alerts caretakers when it detects a fall or other emergencies. I worked with
				the data labeller, adding features of sorting by accuracy and invoking the training AWS
				Lambda function in the Jupyter Notebook labeller. I was also heavily involved in the
				labelling and training of devices, tuning devices when they were not functioning properly.
				Overall, I was able to improve 8 device accuracies by over 30%. I had many more impactful
				experiences at Mercury Alert AI. Please reach out if you would like to learn more!
			</p>
			<img class="mercury-image" src={mercuryDescription} alt="Mercury Description" />
		</div>
	{:else if $currentProject.title === 'Advent of Code'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				Advent of Code is an Advent calendar of algorithmic programming puzzles. 2023 was my first
				year participating in Advent of Code. I decided to participate in Advent of Code using a
				language new to me, Rust. I will definitely compete again next year. You can check out my
				solutions <a href="https://github.com/Leo7Deng/Advent-of-Code-2023" target="_blank">here</a
				>.
			</p>
			<img src={aocDescription} alt="Advent of Code" />
		</div>
	{:else if $currentProject.title === 'Sustainable Computing Laboratory'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				As a research intern at the <a href="https://www3.nd.edu/~scl/"
					>Sustainable Computing Laboratory</a
				>
				at the University of Notre Dame, I worked with Professor Shi and Xueyang Li, to develop a custom
				4D LSTM model to predict
				<a
					href="https://docs.google.com/presentation/d/135QuV73FbD0mBCGbiv-rP5wyZbqH-KutIxJf7Ntd0Fs/edit#slide=id.p"
					>Liver Metastases After Colon Cancer Surgery</a
				>. I researched the most optimal loss functions combined the current 3D-CNN MIL model with
				LSTM to predict the future state of the patient.
			</p>
			<img src={sclDescription} alt="Sustainable Computing Laboratory" />
		</div>
	{:else if $currentProject.title === 'Vitu'}
		<div class="modal-div">
			<h2>{$currentProject.title}</h2>
			<p class="description">
				At Vitu, I developed code for the Pandora project, a National API used by car dealers across
				50 US states, published to the Vitu Developer Portal. I validated the Computer Vision text
				extraction model from Base64.ai against 1000+ vehicle registration, license, and insurance
				test cases to streamline the company's auditing process. I presented the code and impact to
				the CEO at Vitu Headquarters and mapped future goals for the program to map out future
				scaling.
			</p>
			<img src={vituDescription} alt="Vitu" />
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
		margin-bottom: 20px;
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
	.work-description {
		position: absolute;
		left: 15px;
		top: 15px;
		margin-top: 0px;
		font-size: 20px;
		font-weight: bold;
		color: white;
		z-index: 3;
		opacity: 0;
		transition: opacity 0.5s;
	}
	.work-item:hover .work-description {
		opacity: 1;
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
		width: 645px;
		height: 430px;
		margin-top: 40px;
	}
	.description {
		line-height: 25px;
		font-weight: 500;
	}
	.modal-div {
		width: 90%;
		margin: 0 auto;
		img {
			margin-top: 50px;
			width: 80%;
			margin-left: auto;
			margin-right: auto;
			display: block;
		}
		.raytheon-image-container {
			display: flex;
			justify-content: space-between;
		}
		.raytheon-image {
			width: 51%;
			margin-left: 0;
			margin-right: 0;
			display: block;
		}
		embed {
			margin-top: 40px;
			margin-left: auto;
			margin-right: auto;
			display: block;
			width: 600px;
			height: 430px;
			border: rgb(65, 65, 65) 1px dotted;
			border-radius: 10px;
		}
		.opensearch-embed {
			height: 350px;
		}
		.mlp-embed {
			height: 460px;
		}
		.mercury-image {
			margin-top: 25px;
		}
		.usaco-image {
			margin-top: 80px;
		}
	}
	a {
		color: hsl(198, 100%, 43%);
	}
	.footer {
		grid-column: 2;
		margin-top: 50px;
		font-weight: 600;
	}
</style>
