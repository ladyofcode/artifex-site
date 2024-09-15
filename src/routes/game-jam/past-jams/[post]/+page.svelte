<script>
	import PhotoGallery from '$lib/components/game-jam-template/PhotoGallery.svelte';
	import WinnerGallery from '$lib/components/game-jam-template/WinnerGallery.svelte';
	import Description from '$lib/components/game-jam-template/Description.svelte';
	import Event from '$lib/components/game-jam-template/Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
	import GameCard from '$lib/components/game-jam-template/GameCard.svelte';
	import GameCollection from '$lib/components/game-jam-template/GameCollection.svelte';
	import {
		getGameImageUrls,
		parseAwardString,
		parseEventString,
		parseSponsorString,
		parseTeamString
	} from '$lib/utils.ts';

	export let data;

	const teams = data.meta.teams.map(parseTeamString);
	const events = data.meta.events.map(parseEventString);
	const awards = data.meta.awards.map(parseAwardString).map((a) => ({
		award: a.award,
		winner: a.winner,
		image: { src: getGameImageUrls(a.winner, data.meta.identifier, 1) },
		url: teams.find((t) => t.gameTitle === a.winner).url
	}));

	const galleryImages = data.meta.gallery_images.map((i) => ({
		src: `/game-jam/images/${data.meta.identifier}/gallery/${i}`
	}));

	const sponsors = data.meta.sponsors.map(parseSponsorString);

	const gameData = teams.map((t) => ({
		gameName: t.gameTitle,
		images: getGameImageUrls(t.gameTitle, data.meta.identifier, t.imageCount).map((url) => ({
			src: url
		})),
		members: t.members,
		gameUrl: t.url,
		isPlayable: !t.url.startsWith("https://itch.io/"),
	}));
</script>

<main class="page-container">
	<div class="template-wrapper">
		<div>
			<div class="jam-title">
				<h1>{data.meta.title}</h1>
				<h2 style="margin-bottom: 30px;">Theme: {data.meta.theme}</h2>
			</div>

			<Description imageSrc={data.meta.heading_image_url}>
				<svelte:component this={data.content} />
			</Description>

			<Event events={events} isActive={false}></Event>

			<WinnerGallery awards={awards}></WinnerGallery>
			<PhotoGallery images={galleryImages}></PhotoGallery>

			<Sponsors sponsors={sponsors}></Sponsors>

			<GameCollection gameData={gameData}></GameCollection>
			<div style="margin-block: 40px;"></div>
		</div>
	</div>
</main>

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
