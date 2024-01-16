<script lang="ts">
	export let size: number;
	export let rotate: number;
	export let x: number;
	export let y: number;
	$: opacity = (Math.abs(x / 2) ** 2 + Math.abs(y) ** 2) ** 0.5 / 500;

	let animate = false;
    setTimeout(() => {
        animate = true;
    }, 0);
	let transitionEnded = false;
	setTimeout(() => {
		transitionEnded = true;
	}, 1000);
</script>

<div
	style="--size: {size}px; --rotate: {rotate}deg; --x: {x}px; --opacity: {opacity}; --y: {y}px;"
    class:animate
	class:notransition={transitionEnded}
></div>

<style lang="scss">
	div {
		position: absolute;
		width: var(--size);
        background-color: transparent;
		height: var(--size);
		border-radius: calc(var(--size) / 5);
		transition: 1s ease-in-out;
        transition-property: background-color, transform;
	}

	div.notransition {
		transition: 0.05s linear;
	}

	div.animate {
		background-color: rgba(150, 150, 150, var(--opacity));
		transform: translate(var(--x), var(--y)) rotate(var(--rotate));
	}
</style>
