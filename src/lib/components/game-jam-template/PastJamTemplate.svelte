<script>
	import GameGallery from '$lib/components/game-jam-template/GameGallery.svelte';
	import WinnerGallery from '$lib/components/game-jam-template/WinnerGallery.svelte';
	import Description from './Description.svelte';
	import Event from './Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
	import GameCard from './GameCard.svelte';

	export let jamTitle; // : string
	export let jamTheme; // : string
	export let description; // : { description: string, imageSrc: string }
	export let events; // : { date : Date, location: string, title: string }[]
	export let awards; // : {award: string, winner: string, image: {src: string, width: number, height: number}, url: string}[]
	export let galleryImages; // : {src: string, width: number, height: number}[]
	export let sponsors; // : { name: string, imageSrc: string, url: string }[]

	const mockGame = {
		images: [
			{src:'/game-jam/images/2024/games/cant_be_late_2024.png', width: 315, height: 250},
			{src:'/game-jam/images/2024/games/cant_be_late_2024_1.png', width: 794, height: 466},
			{src:'/game-jam/images/2024/games/cant_be_late_2024_2.png', width: 794, height: 441},
			{src:'/game-jam/images/2024/games/cant_be_late_2024_3.png', width: 794, height: 436},
		],
    gameName: "Can't Be Late",
    members: ['Jiayi Fan', 'Xiuchen Gu', 'Yang Li', 'Patrick Haesler', 'yeyeovo'],
    gameUrl: 'https://www.google.com',
	};
</script>

<div class="template-wrapper">
	<div>
		<div class="jam-title">
			<h1>{jamTitle}</h1>
			<h2 style="margin-bottom: 30px;">Theme: {jamTheme}</h2>
		</div>

		<Description description={description.description} imageSrc={description.imageSrc}
		></Description>

		<Event {events} isActive={false}></Event>

		<WinnerGallery {awards}></WinnerGallery>
		<GameGallery images={galleryImages}></GameGallery>

		<Sponsors {sponsors}></Sponsors>

		<GameCard images={mockGame.images} gameName={mockGame.gameName} members={mockGame.members} gameUrl={mockGame.gameUrl}></GameCard>
    <div style="margin-block: 40px;"></div>
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

	:global(h1),
	:global(h2),
	:global(h3) {
		color: black;
		margin: 0;
	}

	:global(p) {
		color: black;
		font-family: var(--ff-body);
		margin: 0;
	}

	.template-wrapper {
		display: flex;
		justify-content: center;
		padding-inline: var(--space-xxl);
    background-color: white;
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
