<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let image;

	let gallery, item;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: gallery,
			children: item,
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" bind:this={gallery}>
	<a
    class="image-wrapper"
		href={image.src}
		data-pswp-width={image.width || 1024}
		data-pswp-height={image.height || 768}
		rel="noreferrer"
		bind:this={item}
	>
		<img src={image.src} alt="" />
	</a>
</div>

<style>
  img{
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;  
    border-radius: var(--border-radius);
  }
</style>
