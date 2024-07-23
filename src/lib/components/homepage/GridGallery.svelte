<script>
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryId;
	export let images;
	export let columns = 3;

	let gallery,
		items = [];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let lightbox = new PhotoSwipeLightbox({
			gallery: gallery,
			children: items,
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();

		gsap.set(items, { y: 100, opacity: 0 });

		let anim = ScrollTrigger.batch(items, {
			onEnter: (batch) =>
				gsap.to(batch, {
					duration: 1,
					autoAlpha: 1,
					y: 0,
					stagger: 0.1
				}),
			start: 'top 88%',
			toggleActions: 'play none none reverse'
		});

		return () => {
			if (anim) {
				anim.forEach(trigger => trigger.kill());
			}
		};
	});
</script>

<div class="pswp-gallery" id={galleryId} bind:this={gallery} style="--columns: {columns}">
	{#each images as image, i}
		<a
			href={image.src}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			rel="noreferrer"
			bind:this={items[i]}
		>
			<img src={image.src} alt="" />
		</a>
	{/each}
</div>

<style>
	.pswp-gallery {
		display: grid;
		grid-template-columns: 1;
		gap: var(--space-md);
		margin-top: var(--space-xxxxl);
	}

	a {
		max-height: 50vh;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin-bottom: var(--space-md);
		border-radius: var(--border-radius);
	}

	@media (min-width: 800px) {
		.pswp-gallery {
			display: grid;
			grid-template-columns: repeat(var(--columns), 1fr);
			gap: var(--space-md);
			margin-top: var(--space-xxxxl);
		}

		img {
			margin-bottom: 0;
			max-height: 180px;
		}
	}
</style>
