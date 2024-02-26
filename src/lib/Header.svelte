<script lang="ts">
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.png';
	import cv from '$lib/images/cv.png';
	import email from '$lib/images/email.png';
	import resume from '$lib/images/resume.pdf';
	import greece from '$lib/images/greece.png';
	import beach from '$lib/images/beach.jpg';
	import dog from '$lib/images/dog.jpg';
	import face from '$lib/images/face.png';
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
			<div class="about-container">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p class="about-link" on:click={toggleExpansion}>
					About Me <span class={isRotated ? 'rotated' : 'unrotated'}>⮐</span>
				</p>
				<div class="about-slider" class:expanded={isExpanded}></div>
				<p>
					I'm in love with developing my knowledge for computer science and software engineering.
					First finding interest in deep learning, I involved myself with research and startups.
					Now, I am learning to develop front and back end applications as well as learning new
					languages like C and Rust.
				</p>
				<!-- images face, dog, beach, greece -->
				<img class="about-image" src={face} alt="face" />
				<img class="about-image" src={dog} alt="dog" />
				<img class="about-image" src={beach} alt="beach" />
				<img class="about-image" src={greece} alt="greece" />
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
		margin-top: 20vh;
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
				// color: rgb(255, 193, 38);
				// font-weight: 800;
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
			width: 600px;
			height: 370px;
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
			.about-image {
				// width: 100px;
				height: 160px; // Set both width and height to 100px
				// object-fit: contain; // Ensure the image fits within the frame without stretching
				border-radius: 15px;
				margin-right: 23px;
				// margin: auto; // Center the image within its container
				// display: block; // Ensure the image is treated as a block-level element
			}
			.expanded {
				transform: translateX(100%);
			}
			.rotated {
				transform: rotate(-90deg);
				display: inline-block;
				transition: 0.5s;
				text-decoration: underline;
			}
			.unrotated {
				display: inline-block;
				transition: 0.5s;
				text-decoration: underline;
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
			position: relative;
			color: hsl(198, 100%, 43%);
			font-weight: 800;
			// Added for animation
			overflow: hidden;
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -2px; // Adjust as needed to position the underline
				height: 6px; // Height of the underline
				width: 100%;
				background-color: hsl(198, 100%, 43%);
				transform: scaleX(0);
				transform-origin: bottom left;
				animation: loadInHighlight 1s forwards linear;
			}
		}
		@keyframes loadInHighlight {
			from {
				transform: scaleX(0);
			}
			to {
				transform: scaleX(1);
			}
		}
		.highlight:nth-of-type(3):after {
			animation-delay: 1.3s; // Starts after the first animation finishes
		}
	}
</style>
