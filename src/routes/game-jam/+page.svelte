<script>
	const banner_image = 'game-jam/images/banner_icons_home.png';
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	const particlesConfig = {
		particles: {
			number: {
				value: 227,
				density: {
					enable: true,
					value_area: 1104.8241
				}
			},
			color: {
				value: '#ffffff'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5918,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0,
					sync: false
				}
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 4,
					size_min: 0.3,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 1,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 600
				}
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'repulse'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 250,
					size: 0,
					duration: 2,
					opacity: 0,
					speed: 3
				},
				repulse: {
					distance: 143.84694,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadFull(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="particles"
	style=""
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>

<main>
	<h1>Annual game jams</h1>
	<p>Co-hosted by Artifex and the ANU CSSA</p>

	<div>
		<div>
			<a href="">View next jams</a>
			<a href="/past-jams">View past jams</a>
		</div>

		<img src={banner_image} alt="" />
	</div>
</main>

<style>
	main {
        width: --width-content;
        margin: 0 auto;
    }
</style>
