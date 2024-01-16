<script lang="ts">
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import faceImage from '$lib/images/face.png';
	import dogImage from '$lib/images/dog.jpg';
	import greeceImage from '$lib/images/greece.png';
    import travImage from '$lib/images/trav.jpg';
    import beachImage from '$lib/images/beach.jpg';
	let parallax;
</script>

<div class="about-me">
	<Parallax sections={6} class="parallax">
        <ParallaxLayer offset={parseFloat('0.25')} rate={parseFloat('0.4')}>
            <img src={dogImage} alt="dog" style="display: block; width: 17%; margin-left: 10%;" />
        </ParallaxLayer>
        <ParallaxLayer offset={parseFloat('0.75')} rate={parseFloat('0.4')}>
            <img src={greeceImage} alt="greece" style="display: block; width: 17%; margin-left: 44%;" />
        </ParallaxLayer>
        <ParallaxLayer offset={parseFloat('0.65')} rate={parseFloat('0.35')}>
			<img src={beachImage} alt="trav" style="display: block; width: 19%; margin-left: 16%;" />
		</ParallaxLayer>
		<!-- <ParallaxLayer offset={parseFloat('0.9')} rate={parseFloat('0.4')}>
			<img src={travImage} alt="beach" style="display: block; width: 17%; margin-left: 7%;" />
		</ParallaxLayer> -->
		<ParallaxLayer offset={parseFloat('0.15')} rate={parseFloat('0.2')}>
			<img src={faceImage} alt="face" style="display: block; width: 21%; margin-left: 32%;" />
		</ParallaxLayer>
		<ParallaxLayer offset={parseFloat('0.1')} rate={parseFloat('-0.2')}>
			
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
