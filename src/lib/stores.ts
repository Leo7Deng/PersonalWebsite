import { writable, readable } from "svelte/store";
const _initialCubeData = [
    { size: 40, rotate: -25, x: 450, y: -120 },
    { size: 30, rotate: 30, x: -430, y: 180 },
    { size: 25, rotate: -50, x: 10, y: 200 },
    { size: 45, rotate: 40, x: -340, y: -70 },
    { size: 50, rotate: -65, x: 430, y: 180 },
    { size: 26, rotate: 75, x: 150, y: 140 },
    { size: 28, rotate: -30, x: -550, y: -50 },
    { size: 48, rotate: 55, x: 310, y: -230 },
    { size: 30, rotate: -10, x: -50, y: -180 },
    { size: 30, rotate: 20, x: -350, y: -200 }
]
export let initialCubeData = readable(structuredClone(_initialCubeData));
export let cubeData = writable(_initialCubeData);