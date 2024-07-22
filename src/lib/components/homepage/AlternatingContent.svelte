<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export let content = '';

	let sections = [];


	onMount(() => {
		const anims = sections.forEach((section, i) => {
			gsap.from(section, {
				x: -200,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: section,
					start: 'top 80%',
					end: 'top 30%',
					toggleActions: 'play none none reverse'
				}
			});
		});

		return () => {
			if (anims) {
				anims.forEach((trigger) => trigger.kill());
			}
		};
	});
</script>

{#each content as section, i}
	<div bind:this={sections[i]}>
		{@html section}
	</div>
{/each}

<style>
	div {
		max-width: 50vw;
		margin-bottom: var(--space-xxxl);
		/* opacity: 0; Initial opacity for animation */
	}

	div:nth-of-type(2n) {
		text-align: right;
		margin-right: 0;
		margin-left: auto;
	}
</style>
