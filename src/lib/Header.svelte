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
</script>

<div class="header">
	<div class="content-wrapper">
		<div class="title">
			<h1 class="name">
				Hi 👋, I'm <span class="name-span">Leo</span>, a student studying<br />
				<span class="highlight">computer science</span> at
				<span class="highlight">Purdue</span>.
			</h1>
			<div class="about-container">
				<p>
					You will find my previous work in deep learning, research, and startups. Now, I am
					learning to develop front and back end applications as well as learning new languages like
					C and Rust.
				</p>
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
	.header {
		margin-top: 20vh;
		margin-bottom: 0px;
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
				margin-bottom: 5px;
			}
			h3 {
				font-size: 20px;
				font-weight: 600;
				margin-bottom: 0px;
				margin-top: 0px;
				line-height: 30px;
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
			height: 347px;
			position: relative;
			overflow: hidden;
			p {
				line-height: 25px;
				font-weight: 600;
				font-size: 20px;
				letter-spacing: 0.1px;
			}
			.about-image {
				height: 165px;
				border-radius: 15px;
				margin-right: 23px;
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
			width: 50px;
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
			overflow: hidden;
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -2px;
				height: 6px;
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
			animation-delay: 1.5s;
		}
	}
</style>
