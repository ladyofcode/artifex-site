<script>
	import '@fontsource-variable/jura';
	import '@fontsource/roboto';
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';
	import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, DrawSVGPlugin, ScrollSmoother);

	let smoother;

	onMount(() => {
		smoother = ScrollSmoother.create({
			smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true, // looks for data-speed and data-lag attributes on elements
			smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
		});

		return () => {
			if (smoother) {
				smoother.kill();
			}
		};
	});
</script>

<!-- <Nav /> -->

<div id="smooth-wrapper">
	<div id="smooth-content">
		<slot />
		<Footer />
	</div>
</div>
