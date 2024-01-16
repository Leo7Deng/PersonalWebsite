<script lang="ts">
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import faceImage from '$lib/images/face.png';
	import dogImage from '$lib/images/dog.jpg';
	import greeceImage from '$lib/images/greece.png';
	let parallax;
</script>

<div class="about-me">
	<Parallax sections={2} class="parallax">
		<ParallaxLayer offset={parseFloat('0.2')} rate={parseFloat('0.1')}>
			<img src={faceImage} alt="face" style="display: block; width: 20%; margin-left: 28%;" />
		</ParallaxLayer>
        <ParallaxLayer offset={parseFloat('0.5')} rate={parseFloat('0.6')}>
            <img src={dogImage} alt="dog" style="display: block; width: 20%; margin-left: 10%;" />
        </ParallaxLayer>
        <ParallaxLayer offset={parseFloat('0.8')} rate={parseFloat('0.2')}>
            <img src={greeceImage} alt="greece" style="display: block; width: 20%; margin-left: 44%;" />
        </ParallaxLayer>
		<ParallaxLayer offset={parseFloat('0.1')} rate={parseFloat('-1.3')}>
			<div
				style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 300px; margin-left: 70%;"
			>
				<h1>About Me</h1>
				<h4>
					I'm a student interested in expanding my knowledge of computer science and software
					engineering. First finding interest in deep learning, I involved myself with research and
					startups. Wanting to test my skills, I have also participated in competitive coding.
					Currently, I am learning to develop front and back end we applications as well as learning
					new languages like C and Rust.
				</h4>
				<h4>
					Outside of coding, you'll find me in the gym, trying all kinds of food, and travelling the
					world.
				</h4>
				<h4>If you want to chat, please feel free to reach out!</h4>
			</div>
		</ParallaxLayer>
	</Parallax>
</div>

<style lang="scss">
	.about-me {
		h1 {
			grid-column-start: 4;
			margin-bottom: 0;
		}

		h4 {
			grid-column-start: 4;
			line-height: 25px;
			font-weight: 600;
		}
	}
</style>
