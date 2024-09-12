<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let images; // {src: string, width: number, height: number}[]

	let gallery;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: gallery,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div>
  <h2 class="title">Gallery</h2>
    <div class="game-gallery-wrapper" bind:this={gallery}>
      {#each images as image}
        <a
          class="image-wrapper"
          href={image.src}
          data-pswp-width={image.width || 1024}
          data-pswp-height={image.height || 768}
          rel="noreferrer"
        >
          <img src={image.src} alt="" />
        </a>
      {/each}
    </div>
</div>

<style>
  .title{
    margin-block-end: var(--title-margin-bottom);
  }
	.game-gallery-wrapper {
		max-width: var(--gallery-width);
		display: grid;
		grid-template-columns: repeat(4, minmax(200px, 1fr));
		gap: var(--space-xs);
		justify-items: stretch;
	}

	:global(.game-gallery-wrapper > *:first-child) {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
		border-radius: var(--border-radius);
	}

  img{
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;  
    border-radius: var(--border-radius);
  }
</style>
