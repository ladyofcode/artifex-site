<script>
	import UpcomingTemplate from "$lib/components/game-jam-template/UpcomingTemplate.svelte";
	import { description } from "$lib/config";

	const mockDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
		'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const mockImageSrc = '/images/piece_by_piece/pbp3.png';

	const mockDescription = {description: mockDesc, imageSrc: mockImageSrc};

	const mockEvents = [
		{ date: new Date('2024-9-5 17:00'), location: 'Somewhere', title: 'Event 1' },
		{ date: new Date('2024-9-10 19:00'), location: 'Somewhere', title: 'Event 2' },
		{ date: new Date('2024-9-12 12:00'), location: 'Somewhere', title: 'Event 3' }
	];
	const mockGuideBullets = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'laboris nisi ut aliquip ex ea commodo consequat.',
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		'on proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	];

	const mockGuide = { intro: "Below is advice to help you with the best possible outcome:", bullets: mockGuideBullets }

	const mockSubmissionDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.';

	const mockSubmission = { description: mockSubmissionDesc, url: "submit-link"};

	const mockSponsorData = [
		{ name: 'Knight', imageSrc: '/images/piece_by_piece/pbp7.png', url: "https://artifexanu.com/" },
		{ name: 'King', imageSrc: '/images/piece_by_piece/pbp10.png', url: "https://artifexanu.com/" },
    { name: 'The Honorable Bishop the Third', imageSrc: '/images/piece_by_piece/pbp14.png', url: "https://artifexanu.com/" },
		{ name: 'Parry', imageSrc: '/images/piece_by_piece/pbp4.png', url: "https://artifexanu.com/" },
	];
</script>

<main class="page-container">
	<UpcomingTemplate jamTitle="Game Jam 2025" description={mockDescription} events={mockEvents} guide={mockGuide} submission={mockSubmission} sponsors={mockSponsorData}></UpcomingTemplate>
</main>