<script>
	import SingleGalleryImage from './SingleGalleryImage.svelte';
	export let awards = []; // : {award: string, winner: string, image: {src: string, width: number, height: number}, url: string}[]
</script>

<div>
  <h2 class="title">Winners</h2>
    <div class="winner-gallery-wrapper">
      {#each awards as award, index}
        <div class="winner-wrapper">
          <SingleGalleryImage image={award.image}></SingleGalleryImage>
          <a class="winner-name-wrapper" href={award.url}>
            <h3>{award.award}</h3>
            <h4>{award.winner}</h4>
          </a>
        </div>
      {/each}
    </div>
</div>

<style>
  .title{
    margin-block-end: var(--title-margin-bottom);
  }
	h4 {
		font-family: var(--ff-heading);
		color: black;
	}

	.winner-gallery-wrapper {
		display: grid;
		grid-template-columns: repeat(3, minmax(240px, 1fr));
		gap: var(--space-xs);
    max-width: var(--gallery-width);
	}

	.winner-name-wrapper {
		max-width: 320px;
		text-align: center;
	}

	.winner-name-wrapper:hover {
		text-decoration-color: black;
		text-underline-offset: 2px;
	}
</style>
