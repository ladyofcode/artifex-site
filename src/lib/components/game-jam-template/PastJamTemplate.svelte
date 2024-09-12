<script>
	import PhotoGallery from '$lib/components/game-jam-template/PhotoGallery.svelte';
	import WinnerGallery from '$lib/components/game-jam-template/WinnerGallery.svelte';
	import Description from './Description.svelte';
	import Event from './Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
	import GameCard from './GameCard.svelte';
	import GameCollection from './GameCollection.svelte';

	export let jamTitle; // : string
	export let jamTheme; // : string
	export let description; // : { description: string, imageSrc: string }
	export let events; // : { date : Date, location: string, title: string }[]
	export let awards; // : {award: string, winner: string, image: {src: string, width: number, height: number}, url: string}[]
	export let galleryImages; // : {src: string, width: number, height: number}[]
	export let sponsors; // : { name: string, imageSrc: string, url: string }[]
  // export let gameData;

  // Real data for Game Jam 2024
  const gameData2024 = [
    {
      gameName: "Once More, With Spirit",
      images: [
        { src: "/game-jam/images/2024/games/once_more_with_spirit_2024.png", width: 347, height: 275 }
      ],
      members: ["Not recorded"],
      gameUrl: "https://gingeh.itch.io/once-more-with-spirit",
      isPlayable: true,
    },
    {
      gameName: "12 Hours",
      images: [
        { src: "/game-jam/images/2024/games/12_hours_2024.png", width: 315, height: 250 }
      ],
      members: ["Not recorded"],
      gameUrl: "https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876792",
      isPlayable: false,
    },
    {
      gameName: "GOU: Shadow Die Thrice",
      images: [
        { src: "/game-jam/images/2024/games/gou_shadow_die_thrice_2024.png", width: 347, height: 332 }
      ],
      members: ["Xing Chen", "Hongjun Xu", "Xuancong Pang", "Tianci Li", "Shengjie Liu"],
      gameUrl: "https://cxsgdsg.itch.io/debug-dragon",
      isPlayable: true,
    },
    {
      gameName: "Can't Be Late",
      images: [
        {src:'/game-jam/images/2024/games/cant_be_late_2024.png', width: 315, height: 250},
        {src:'/game-jam/images/2024/games/cant_be_late_2024_1.png', width: 794, height: 466},
        {src:'/game-jam/images/2024/games/cant_be_late_2024_2.png', width: 794, height: 441},
        {src:'/game-jam/images/2024/games/cant_be_late_2024_3.png', width: 794, height: 436},
      ],
      members: ['Jiayi Fan', 'Xiuchen Gu', 'Yang Li', 'Patrick Haesler', 'yeyeovo'],
      gameUrl: 'https://hitomi-kiri.itch.io/cant-be-late',
      isPlayable: true,
    },
    {
      gameName: "Caffeine Crash",
      images: [
        {src:'/game-jam/images/2024/games/caffeine_crash_2024.png', width: 315, height: 250},
      ],
      members: ["Long Feng", "Sachi Ashok", "Jay Johnston"],
      gameUrl: 'https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876783',
      isPlayable: false,
    },
    {
      gameName: "Do Catch The Gem",
      images: [
        {src:'/game-jam/images/2024/games/do_catch_the_gem_2024.png', width: 347, height: 188},
      ],
      members: ["Siqi Cheng", "Jiale Zhang", "Kris", "William"],
      gameUrl: 'https://charrrles.itch.io/do-catch-the-gem',
      isPlayable: true,
    },
    {
      gameName: "It's Castle Time",
      images: [
        {src:'/game-jam/images/2024/games/its_the_castle_time_2024.png', width: 347, height: 347},
      ],
      members: ["Nicholas Arvanitellis", "Clare Mason-Cox", "Martyn Barac", "Emily Coper-Jones"],
      gameUrl: 'https://inkxy.itch.io/its-castle-time',
      isPlayable: true,
    },
    {
      gameName: "Symphony of Vampires",
      images: [
        {src:'/game-jam/images/2024/games/symphony_of_vampires_2024.png', width: 347, height: 275},
      ],
      members: ["Divyesh Srivastava", "Saksham Gupta", "Aditya Iyengar", "Natalie Dunn"],
      gameUrl: 'https://dotterine.itch.io/symphonyofvampires',
      isPlayable: true,
    },
    {
      gameName: "Ghost Hunting for Dummies",
      images: [
        {src:'/game-jam/images/2024/games/ghost_hunting_for_dummies_2024.png', width: 347, height: 347},
      ],
      members: ["Joshua King", "John Atkins", "Nikhila Gurusinghe", "Sophie Hawke", "Ryan Yoon"],
      gameUrl: 'https://rynooy.itch.io/ghost-hunting-for-dumies',
      isPlayable: true,
    },
    {
      gameName: "Feeble Hero",
      images: [],
      members: ["Yonah Tal-Meyer", "Arlo Taylor"],
      gameUrl: 'https://doomguy077.itch.io/feeble-hero',
      isPlayable: true,
    },
    {
      gameName: "Temporal Tactics",
      images: [
        {src:'/game-jam/images/2024/games/temporal_tactics_2024.png', width: 347, height: 347},
      ],
      members: ["Unknown"],
      gameUrl: 'https://trr4m.itch.io/temporal-tactics',
      isPlayable: true,
    },
    {
      gameName: "It's Rewind Time",
      images: [],
      members: ["Azhar Hussain", "Jace Basden", "Adrian Carpio", "William Rogers", "Aditya Grama"],
      gameUrl: 'https://itch.io/jam/cssa-artifex-anu-game-jam-2024/rate/2876722',
      isPlayable: false,
    },
  ]
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
		<PhotoGallery images={galleryImages}></PhotoGallery>

		<Sponsors {sponsors}></Sponsors>

		<GameCollection gameData={gameData2024}></GameCollection>
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
