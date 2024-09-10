<script>
	import GameGallery from "$lib/components/game-jam-template/GameGallery.svelte";
  import WinnerGallery from "$lib/components/game-jam-template/WinnerGallery.svelte";
	import Description from "./Description.svelte";
	import Event from "./Event.svelte";
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';

  export let jamTitle; // : string
  export let jamTheme; // : string
	export let description; // : { description: string, imageSrc: string }
	export let events; // : { date : Date, location: string, title: string }[]
	export let awards; // : {award: string, winner: string, image: {src: string, width: number, height: number}, url: string}[]
  export let galleryImages; // : {src: string, width: number, height: number}[]
	export let sponsors; // : { name: string, imageSrc: string, url: string }[]
</script>

<div class="template-wrapper">
  <div>
    <div class="jam-title">
      <h1>{jamTitle}</h1>
      <h2 style="margin-bottom: 30px;">Theme: {jamTheme}</h2>
    </div>
    

    <Description description={description.description} imageSrc={description.imageSrc}></Description>

    <Event events={events} isActive={false}></Event>

    <WinnerGallery awards={awards}></WinnerGallery>
    <GameGallery images={galleryImages}></GameGallery>

    <Sponsors sponsors={sponsors}></Sponsors>
  </div>
</div>



<style>
  .jam-title {
    margin-block-start: var(--space-md);
    margin-block-end: var(--space-xxxxl);
  }

  .jam-title > h1 {
    font-size: 3rem;
  }

  .jam-title > h2 {
    padding-inline-start: var(--space-xs);
  }

  :global(h1), :global(h2), :global(h3){
    color: black;
    margin: 0;
  }

  :global(p){
    color: black;
    font-family: var(--ff-body);
    margin: 0;
  }

  .template-wrapper {
    display: flex;
    justify-content: center;
    padding-inline: var(--space-xxl);
  }

  .template-wrapper > div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  :root {
    --gallery-width: 1000px;
    --title-margin-bottom: var(--space-sm);
  }
</style>