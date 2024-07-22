<script>
	export let id = '', subheading='';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let subheader;

	onMount(() => {

		let anim = gsap.timeline({
			scrollTrigger: {
				trigger: subheader,
				start: 'top 75%',
				end: 'top 25%',
				toggleActions: 'play none none reverse'
			}
		});
		
		anim.to(subheader, {
			'--widthLine': '160px',
		})
		.to(subheader, {
			'--leftDot': '170px',
			'--widthDot': '10px'
		})
		.to(subheader, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power1.out'
		}, 0);

		return () => {
			if (anim) {
				anim.kill();
			}
		};
	});
</script>

<h2 bind:this={subheader} {id}>{subheading}</h2>

<style>
	:root {
		--widthLine: 0;
		--widthDot: 0;
		--leftDot: 0;
	}

	h2 {
		font-size: 3.2rem;
		line-height: 3.2rem;
		margin-bottom: calc(var(--space-xl) * 2);
		position: relative;
		display: inline-block;
		width: 100%;
		color: var(--clr-text);
		opacity: 0;
		transform: translateY(20px);
	}

	h2:before {
		content: '';
		position: absolute;
		right: 0;
		top: 100%;
		left: 0vw;
		height: 10px;
		margin-right: 40px;
		margin-top: 24px;
		background: var(--clr-afx-blue);
		background: linear-gradient(
			270deg,
			var(--clr-afx-blue) 0%,
			var(--clr-afx-purple) 50%,
			var(--clr-afx-pink) 100%
		);
		width: var(--widthLine);
		border-radius: 16px;
		transition: width 0.3s ease;
	}

	h2:after {
		content: '';
		position: absolute;
		top: 100%;
		left: var(--leftDot);
		width: var(--widthDot);
		height: 10px;
		border-radius: 50%;
		margin-top: 24px;
		background: var(--clr-afx-blue);
		/* visibility: hidden; */
		display: inline-block;
		transition: width 0.1s ease;
	}
</style>
