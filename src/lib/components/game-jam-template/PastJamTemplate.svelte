<script>
	import GameGallery from "$lib/components/game-jam-template/GameGallery.svelte";
  import WinnerGallery from "$lib/components/game-jam-template/WinnerGallery.svelte";
	import Description from "./Description.svelte";
	import Event from "./Event.svelte";
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';

  const mockDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
		'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const mockImageSrc = '/images/piece_by_piece/pbp3.png';

	const mockDescription = {description: mockDesc, imageSrc: mockImageSrc};

  const mockEvents = [
		{ date: new Date('2023-9-5 17:00'), location: 'Somewhere', title: 'Event 1' },
		{ date: new Date('2023-9-10 19:00'), location: 'Somewhere', title: 'Event 2' },
		{ date: new Date('2023-9-12 12:00'), location: 'Somewhere', title: 'Event 3' }
	];

  const mockAwards = [
    { award: "Best Bishop Award", winner: "Bishop", image: {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540}, url: "bishop" },
    { award: "Best Bishop Award", winner: "Bishop", image: {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540}, url: "bishop" },
    { award: "Best Bishop Award", winner: "Bishop", image: {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540}, url: "bishop" },
    
    { award: "Best Bishop Award", winner: "Bishop", image: {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540}, url: "bishop" },
    
    { award: "Best Bishop Award", winner: "Bishop", image: {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540}, url: "bishop" },
  ]

  const mockGalleryImages = [
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
    {src: '/images/piece_by_piece/pbp14.png', width: 960, height: 540},
  ];

  const mockSponsorData = [
		{ name: 'Knight', imageSrc: '/images/piece_by_piece/pbp7.png', url: "https://artifexanu.com/" },
		{ name: 'King', imageSrc: '/images/piece_by_piece/pbp10.png', url: "https://artifexanu.com/" },
    { name: 'The Honorable Bishop the Third', imageSrc: '/images/piece_by_piece/pbp14.png', url: "https://artifexanu.com/" },
		{ name: 'Parry', imageSrc: '/images/piece_by_piece/pbp4.png', url: "https://artifexanu.com/" },
	];

</script>

<div class="template-wrapper">
  <div>
    <h1>Game Jam 2024</h1>
    <h2 style="margin-bottom: 30px;">Theme: Time loop</h2>

    <Description description={mockDescription.description} imageSrc={mockDescription.imageSrc}></Description>

    <Event events={mockEvents} isActive={false}></Event>

    <WinnerGallery awards={mockAwards}></WinnerGallery>
    <GameGallery images={mockGalleryImages}></GameGallery>

    <Sponsors sponsors={mockSponsorData}></Sponsors>
  </div>
</div>



<style>
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