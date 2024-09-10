<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let images; // : string[]
	export let gameName; // : string
	export let members; // : string[]
	export let imgWidth = 300;

	const imageCount = images.length;
	let currentIndex = 0;

	function slideImage(newIndex) {
		gsap.to('.gallery', {x: newIndex * -imgWidth});
    currentIndex = newIndex;
	}

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.on('contentActivate', ({ content }) => slideImage(content.index));
		lightbox.init();
	});
</script>

<div class="card-wrapper">
	<div class="gallery-wrapper">
    <div class="controller">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>      
    </div>
		<div class="gallery" id="gallery">
			{#each images as image}
				<a
					class="image-wrapper"
					href={image}
					data-pswp-width={1024}
					data-pswp-height={768}
					rel="noreferrer"
				>
					<img src={image} alt="" />
				</a>
			{/each}
		</div>
	</div>
	<h2>{gameName}</h2>
  <h3>Created by</h3>
	<ul>
		{#each members as member}
			<li>{member}</li>
		{/each}
	</ul>
</div>

<style>
	:root {
		--image-width: 300px;
	}

	.card-wrapper {
		width: 320px;
		padding-inline: 10px;
		padding-block: 10px;
		border-radius: 14px;
		background-color: #dddddd;
	}

	.gallery-wrapper {
		border-radius: 4px;
		width: 100%;
		aspect-ratio: 4/3;
		background-color: #eeeeee;
		overflow: clip;
    position: relative;
	}

  .controller {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    pointer-events: none;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    size: 1px;
  }

  .gallery {
    display: flex;
		flex-wrap: nowrap;
  }

	.image-wrapper {
		width: var(--image-width);
		aspect-ratio: 4/3;
		flex-shrink: 0;
		flex-grow: 0;
	}

	.gallery img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	ul {
		padding-left: 24px;
	}

	li {
		font-family: var(--ff-body);
		color: black;
	}
</style>
