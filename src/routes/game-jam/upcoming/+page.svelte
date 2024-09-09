<script>
	import Description from '$lib/components/game-jam-template/Description.svelte';
	import Event from '$lib/components/game-jam-template/Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
	const mockDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
		'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
		'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const mockImageSrc = '/images/piece_by_piece/pbp3.png';
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
	const mockSubmissionDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
		'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
		'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.';
	const mockSponsorData = [
		{ name: 'Knight', imageSrc: '/images/piece_by_piece/pbp7.png' },
		{ name: 'King', imageSrc: '/images/piece_by_piece/pbp10.png' },
    { name: 'The Honorable Bishop the Third', imageSrc: '/images/piece_by_piece/pbp14.png' },
		{ name: 'Parry', imageSrc: '/images/piece_by_piece/pbp4.png' },
	];
</script>

<div class="template-wrapper">
	<div>
		<div>
			<h1>Game Jam 2025</h1>
		</div>
		<Description description={mockDesc} imageSrc={mockImageSrc}></Description>

		<a class="link-button" href="rule-link" tabindex="0">Read the rules</a>

		<Event events={mockEvents}></Event>

		<div class="guide-wrapper">
			<h2>Guide</h2>
			<p>Below is advice to help you with the best possible outcome:</p>
			<ul>
				{#each mockGuideBullets as bullet}
					<li><p>{bullet}</p></li>
				{/each}
			</ul>
		</div>

		<div class="submission-wrapper">
			<h2>Submission</h2>
			<p>{mockSubmissionDesc}</p>
			<br />
			<a class="link-button" href="submit-link">Submit game</a>
		</div>

		<Sponsors sponsors={mockSponsorData}></Sponsors>
	</div>
</div>

<style>
	h1 {
		font-size: 3rem;
		color: black;
	}

	:global(h2),
	:global(h3) {
		font-family: 'Jura Variable', Arial, Helvetica, sans-serif;
		color: black;
		margin: 0;
	}
	:global(p) {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		color: black;
		margin: 0;
	}

	.template-wrapper {
		display: flex;
		justify-content: center;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
	}

	.template-wrapper > div {
		display: flex;
		gap: 10px;
		flex-direction: column;
		align-items: start;
	}

	.link-button {
		all: unset;
		padding-block: 10px;
		padding-inline: 70px;
		border-radius: 5px;
		background-color: #eeeeee;
		user-select: none;
		cursor: pointer;
		margin-block: 20px;
	}

	.link-button:hover {
		background-color: #cccccc;
	}

	.link-button:focus {
		background-color: #444444;
		color: #ffffff;
	}

	.guide-wrapper {
		margin-block: 20px;
	}

	.guide-wrapper p {
		padding-inline-start: 4px;
		margin-block-start: 10px;
	}

	.guide-wrapper ul {
		padding-block-start: 10px;
		padding-inline-start: 26px;
	}

	.guide-wrapper li {
		color: black;
		margin-block-end: 10px;
	}

	.submission-wrapper p {
		padding-inline-start: 4px;
		max-width: 700px;
		margin-block: 10px;
	}
</style>
