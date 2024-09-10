<script>
	import PastJamTemplate from "$lib/components/game-jam-template/PastJamTemplate.svelte";

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
<PastJamTemplate jamTitle="Game Jam 2024" jamTheme="Time loop" description={mockDescription} events={mockEvents} awards={mockAwards} galleryImages={mockGalleryImages} sponsors={mockSponsorData}></PastJamTemplate>
