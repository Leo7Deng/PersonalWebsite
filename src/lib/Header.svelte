<script lang="ts">
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.png';
	import cv from '$lib/images/cv.png';
	import email from '$lib/images/email.png';
	import resume from '$lib/images/resume.pdf';
	let isExpanded = false;
	let isRotated = false;
	function toggleExpansion() {
		isExpanded = !isExpanded;
		isRotated = !isRotated;
	}
</script>

<div class="header2">
	<div class="content-wrapper">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="title">
			<h1 class="name">
				Hi 👋, I'm <span class="name-span">Leo</span>, a student <br />
				studying <span class="highlight">computer science</span> at
				<span class="highlight">Purdue</span>.
			</h1>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="about-container" on:click={toggleExpansion}>
				<p class="about-link">About Me <span class={isRotated ? 'rotated' : 'unrotated'}>⮐</span></p>
				<div class="about-slider" class:expanded={isExpanded}></div>
				<p>
					I'm in love with developing my knowledge for computer science and software engineering.
					First finding interest in deep learning, I involved myself with research and startups.
					Wanting to test my skills, I have also participated in competitive coding. Currently, I am
					learning to develop front and back end applications as well as learning new languages like
					C and Rust.
				</p>
			</div>
		</div>
		<div class="icons">
			<a href="https://github.com/Leo7Deng" target="_blank"
				><img src={github} alt="GitHub" class="icon" /></a
			>
			<a href="https://linkedin.com/in/leo-deng" target="_blank"
				><img src={linkedin} alt="LinkedIn" class="icon" /></a
			>
			<a href={resume} target="_blank"><img src={cv} alt="CV" class="icon" /></a>
			<a href="mailto:leo7deng@gmail.com"><img src={email} alt="Email" class="icon" /></a>
		</div>
	</div>
</div>

<style lang="scss">
	@import 'normalize.css';
	.header2 {
		margin-top: 23vh;
		.content-wrapper {
			display: flex;
			align-items: start;
		}
		.title {
			margin-left: 17vw;
			.name {
				margin-top: 0px;
				font-size: 33px;
				font-weight: bold;
				margin-bottom: 30px;
			}
			.name-span {
				color: rgb(255, 193, 38);
				font-weight: 800;
				// 1px shadow
				// text-shadow: rgb(180, 132, 0) 1px 1px 1px;
				// shadow
				// text-shadow: 0 0 5px #d3d3d3, 0 0 10px #d3d3d3, 0 0 15px #d3d3d3, 0 0 20px #d3d3d3,
					// 0 0 25px #d3d3d3, 0 0 30px #d3d3d3, 0 0 35px #d3d3d3;
				// text-decoration: solid overline rgb(255, 193, 38) 6px;
				// color: hsl(198, 100%, 43%);
			// text-decoration: solid underline hsl(198, 100%, 43%) 6px;
			}
			.about-link {
				font-size: 20px;
				font-weight: bold;
				text-decoration: underline;
				color: rgb(55, 55, 55);
				cursor: pointer;
			}
		}
		.about-container {
			margin-top: 20px;
			width: 578px; 
			height: 200px; 
			position: relative; 
			overflow: hidden; 
			p {
				line-height: 25px;
				font-weight: 600;
			}
			.about-slider {
				margin-top: 60px;
				height: 100%; 
				width: 100%; 
				position: absolute;
				top: 0;
				right: 0; 
				background-color: hsl(0, 0%, 98%);
				transform: translateX(0%); 
				transition: transform 1s;
			}
			.expanded {
				transform: translateX(100%);
			}
			.rotated {
				transform: rotate(-90deg);
				display: inline-block;
				transition: 0.5s;
			}
			.unrotated {
				display: inline-block;
				transition: 0.5s;
			}
		}
		.icons {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
			margin-left: 20vw;
		}
		.icon {
			width: 40px;
			padding: 5px;
			height: auto;
			border-radius: 5px;
			transition: 0.5s;
		}
		.icon:hover {
			transform: scale(1.1);
			transition: 0.5s;
		}
		.highlight {
			color: hsl(198, 100%, 43%);
			text-decoration: solid underline hsl(198, 100%, 43%) 6px;
			font-weight: 800;
		}
	}
</style>
