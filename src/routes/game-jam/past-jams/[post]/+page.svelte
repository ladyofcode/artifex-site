<script>
	import PhotoGallery from '$lib/components/game-jam-template/PhotoGallery.svelte';
	import WinnerGallery from '$lib/components/game-jam-template/WinnerGallery.svelte';
	import Description from '$lib/components/game-jam-template/Description.svelte';
	import Event from '$lib/components/game-jam-template/Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
	import GameCard from '$lib/components/game-jam-template/GameCard.svelte';
	import GameCollection from '$lib/components/game-jam-template/GameCollection.svelte';

	export let data;

	const mockTheme = 'Time Loop';

	const mockDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
		'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const mockImageSrc = '/images/piece_by_piece/pbp3.png';

	const mockDescription = { description: mockDesc, imageSrc: mockImageSrc };

	const mockEvents = [
		{ date: new Date('2023-9-5 17:00'), location: 'Somewhere', title: 'Event 1' },
		{ date: new Date('2023-9-10 19:00'), location: 'Somewhere', title: 'Event 2' },
		{ date: new Date('2023-9-12 12:00'), location: 'Somewhere', title: 'Event 3' }
	];

	const mockAwards = [
		{
			award: 'Best Bishop Award',
			winner: 'Bishop',
			image: { src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
			url: 'bishop'
		},
		{
			award: 'Best Bishop Award',
			winner: 'Bishop',
			image: { src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
			url: 'bishop'
		},
		{
			award: 'Best Bishop Award',
			winner: 'Bishop',
			image: { src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
			url: 'bishop'
		},

		{
			award: 'Best Bishop Award',
			winner: 'Bishop',
			image: { src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
			url: 'bishop'
		},

		{
			award: 'Best Bishop Award',
			winner: 'Bishop',
			image: { src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
			url: 'bishop'
		}
	];

	const mockGalleryImages = [
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 },
		{ src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540 }
	];

	const mockSponsorData = [
		{ name: 'Knight', imageSrc: '/images/piece_by_piece/pbp7.png', url: 'https://artifexanu.com/' },
		{ name: 'King', imageSrc: '/images/piece_by_piece/pbp10.png', url: 'https://artifexanu.com/' },
		{
			name: 'The Honorable Bishop the Third',
			imageSrc: '/images/piece_by_piece/pbp14.png',
			url: 'https://artifexanu.com/'
		},
		{ name: 'Parry', imageSrc: '/images/piece_by_piece/pbp4.png', url: 'https://artifexanu.com/' }
	];

	// Real data for Game Jam 2024
	const gameData2024 = [
		{
			gameName: 'Once More, With Spirit',
			images: [
				{
					src: '/game-jam/images/2024/games/once_more_with_spirit_2024.png',
					width: 347,
					height: 275
				}
			],
			members: ['Not recorded'],
			gameUrl: 'https://gingeh.itch.io/once-more-with-spirit',
			isPlayable: true
		},
		{
			gameName: '12 Hours',
			images: [{ src: '/game-jam/images/2024/games/12_hours_2024.png', width: 315, height: 250 }],
			members: ['Not recorded'],
			gameUrl: 'https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876792',
			isPlayable: false
		},
		{
			gameName: 'GOU: Shadow Die Thrice',
			images: [
				{
					src: '/game-jam/images/2024/games/gou_shadow_die_thrice_2024.png',
					width: 347,
					height: 332
				}
			],
			members: ['Xing Chen', 'Hongjun Xu', 'Xuancong Pang', 'Tianci Li', 'Shengjie Liu'],
			gameUrl: 'https://cxsgdsg.itch.io/debug-dragon',
			isPlayable: true
		},
		{
			gameName: "Can't Be Late",
			images: [
				{ src: '/game-jam/images/2024/games/cant_be_late_2024.png', width: 315, height: 250 },
				{ src: '/game-jam/images/2024/games/cant_be_late_2024_1.png', width: 794, height: 466 },
				{ src: '/game-jam/images/2024/games/cant_be_late_2024_2.png', width: 794, height: 441 },
				{ src: '/game-jam/images/2024/games/cant_be_late_2024_3.png', width: 794, height: 436 }
			],
			members: ['Jiayi Fan', 'Xiuchen Gu', 'Yang Li', 'Patrick Haesler', 'yeyeovo'],
			gameUrl: 'https://hitomi-kiri.itch.io/cant-be-late',
			isPlayable: true
		},
		{
			gameName: 'Caffeine Crash',
			images: [
				{ src: '/game-jam/images/2024/games/caffeine_crash_2024.png', width: 315, height: 250 }
			],
			members: ['Long Feng', 'Sachi Ashok', 'Jay Johnston'],
			gameUrl: 'https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876783',
			isPlayable: false
		},
		{
			gameName: 'Do Catch The Gem',
			images: [
				{ src: '/game-jam/images/2024/games/do_catch_the_gem_2024.png', width: 347, height: 188 }
			],
			members: ['Siqi Cheng', 'Jiale Zhang', 'Kris', 'William'],
			gameUrl: 'https://charrrles.itch.io/do-catch-the-gem',
			isPlayable: true
		},
		{
			gameName: "It's Castle Time",
			images: [
				{ src: '/game-jam/images/2024/games/its_the_castle_time_2024.png', width: 347, height: 347 }
			],
			members: ['Nicholas Arvanitellis', 'Clare Mason-Cox', 'Martyn Barac', 'Emily Coper-Jones'],
			gameUrl: 'https://inkxy.itch.io/its-castle-time',
			isPlayable: true
		},
		{
			gameName: 'Symphony of Vampires',
			images: [
				{
					src: '/game-jam/images/2024/games/symphony_of_vampires_2024.png',
					width: 347,
					height: 275
				}
			],
			members: ['Divyesh Srivastava', 'Saksham Gupta', 'Aditya Iyengar', 'Natalie Dunn'],
			gameUrl: 'https://dotterine.itch.io/symphonyofvampires',
			isPlayable: true
		},
		{
			gameName: 'Ghost Hunting for Dummies',
			images: [
				{
					src: '/game-jam/images/2024/games/ghost_hunting_for_dummies_2024.png',
					width: 347,
					height: 347
				}
			],
			members: ['Joshua King', 'John Atkins', 'Nikhila Gurusinghe', 'Sophie Hawke', 'Ryan Yoon'],
			gameUrl: 'https://rynooy.itch.io/ghost-hunting-for-dumies',
			isPlayable: true
		},
		{
			gameName: 'Feeble Hero',
			images: [],
			members: ['Yonah Tal-Meyer', 'Arlo Taylor'],
			gameUrl: 'https://doomguy077.itch.io/feeble-hero',
			isPlayable: true
		},
		{
			gameName: 'Temporal Tactics',
			images: [
				{ src: '/game-jam/images/2024/games/temporal_tactics_2024.png', width: 347, height: 347 }
			],
			members: ['Unknown'],
			gameUrl: 'https://trr4m.itch.io/temporal-tactics',
			isPlayable: true
		},
		{
			gameName: "It's Rewind Time",
			images: [],
			members: ['Azhar Hussain', 'Jace Basden', 'Adrian Carpio', 'William Rogers', 'Aditya Grama'],
			gameUrl: 'https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876722',
			isPlayable: false
		}
	];
</script>

<main class="page-container">
	<div class="template-wrapper">
		<div>
			<div class="jam-title">
				<h1>{data.slug}</h1>
				<h2 style="margin-bottom: 30px;">Theme: {mockTheme}</h2>
			</div>

			<Description description={mockDescription.description} imageSrc={mockDescription.imageSrc}
			></Description>

			<Event events={mockEvents} isActive={false}></Event>

			<WinnerGallery awards={mockAwards}></WinnerGallery>
			<PhotoGallery images={mockGalleryImages}></PhotoGallery>

			<Sponsors sponsors={mockSponsorData}></Sponsors>

			<GameCollection gameData={gameData2024}></GameCollection>
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
