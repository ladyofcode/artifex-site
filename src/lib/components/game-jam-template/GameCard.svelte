<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let images; // : {src: string, width: number, height: number}[]
	export let gameName; // : string
	export let members; // : string[]
  export let gameUrl; // : string
	export let isPlayable; // : bool
	export let contentWidth = 300;

	let gallery;

	const imageCount = images.length;
	let currentIndex = 0;

	function slideImage(newIndex) {
		gsap.to(gallery, {x: newIndex * -contentWidth});
    currentIndex = newIndex;
	}

  function nextImage(){
    currentIndex += 1;
    slideImage(currentIndex);
  }

  function previousImage(){
    currentIndex -= 1;
    slideImage(currentIndex);
  }

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: gallery,
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
      <button class:invisible={currentIndex===0} on:click={previousImage}>
        <svg class="left-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button class:invisible={imageCount === 0 || currentIndex===imageCount - 1} on:click={nextImage}>
        <svg class="right-arrow" class:invisible={currentIndex===imageCount - 1} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
		<div class="gallery" bind:this={gallery}>
			{#each images as image}
				<a
					class="image-wrapper"
					href={image.src}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					rel="noreferrer"
				>
					<img src={image.src} alt="" />
				</a>
			{/each}
		</div>
	</div>
  <h2 class="gameTitle">{gameName}</h2>
  <h4>Created by</h4>
	<ul>
		{#each members as member}
			<li>{member}</li>
		{/each}
	</ul>
	<a href={gameUrl} class="play-button">{isPlayable?"Play Game":"View Game"}</a>
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
		background-color: rgb(218, 220, 222);
    display: flex;
    flex-direction: column;
    align-items: start;
	}

	.gallery-wrapper {
		border-radius: 4px;
		width: 100%;
		aspect-ratio: 4/3;
		overflow: clip;
    position: relative;
	}

  .controller {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .controller > button{
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    width: 10%;
    cursor: pointer;
    pointer-events: auto;
  }

  .controller svg {
    width: 100%;
    aspect-ratio: 1/1;
    stroke: antiquewhite;
    filter: drop-shadow(0 0 1px black);
  }

  .controller svg:hover {
    stroke: white;
  }

  .invisible {
    visibility: hidden;
    pointer-events: none;
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
		object-fit: scale-down;
		object-position: center;
	}

	ul {
		padding-left: 12px;
		height: 120px;
	}

  li::marker {
    content: none;
  }

	li, h4 {
		font-family: var(--ff-body);
		color: black;
	}

  .gameTitle {
		margin-block-start: var(--space-xs);
		height: 72px;
  }

	.play-button {
		border: 0;
		border-radius: var(--border-radius);
		padding-block: var(--space-xs);
		padding-inline: var(--space-md);
		margin-block-start: var(--space-xs);
		align-self: center;
		font-weight: 700;
    background-color: rgb(244,244,244);
		cursor: pointer;
		font-family: var(--ff-heading);
		text-decoration: none;
		color: black;
	}

	.play-button:hover:not(:focus) {
		background-color: rgb(69, 69, 69);
		color: #DDDDDD;
	}
</style>
