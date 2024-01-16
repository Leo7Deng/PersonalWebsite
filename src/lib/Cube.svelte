<script lang="ts">
	export let size: number;
	export let rotate: number;
	export let x: number;
	export let y: number;
	let opacity = (Math.abs(x) ** 3 + Math.abs(y) ** 3) ** 0.4 / 3650;

	let animate = false;
    setTimeout(() => {
        animate = true;
    }, 0);
</script>

<div
	style="--size: {size}px; --rotate: {rotate}deg; --x: {x}px; --opacity: {opacity}; --y: {y}px;"
    class:animate
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

	div.animate {
		background-color: rgba(150, 150, 150, var(--opacity));
		transform: translate(var(--x), var(--y)) rotate(var(--rotate));
	}
</style>
