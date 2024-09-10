<script>
	import Description from '$lib/components/game-jam-template/Description.svelte';
	import Event from '$lib/components/game-jam-template/Event.svelte';
	import Sponsors from '$lib/components/game-jam-template/Sponsors.svelte';
  
	export let description; // : { description: string, imageSrc: string }
	export let events; // : { date : Date, location: string, title: string }[]
	export let guide; // : { intro: string, bullets: string[] }
	export let submission; // : { description: string, url: string }
	export let sponsors; // : { name: string, imageSrc: string, url: string }[]

</script>

<div class="template-wrapper">
	<div>
		<div class="jam-title">
			<h1>Game Jam 2025</h1>
		</div>
		<Description description={description.description} imageSrc={description.imageSrc}></Description>

		<a class="link-button" href="rule-link" tabindex="0">Read the rules</a>

		<Event events={events}></Event>

		<div class="guide-wrapper">
			<h2>Guide</h2>
			<p>{guide.intro}</p>
			<ul>
				{#each guide.bullets as bullet}
					<li><p>{bullet}</p></li>
				{/each}
			</ul>
		</div>

		<div class="submission-wrapper">
			<h2>Submission</h2>
			<p>{submission.description}</p>
			<br />
			<a class="link-button" href={submission.url}>Submit game</a>
		</div>

		<Sponsors sponsors={sponsors}></Sponsors>
	</div>
</div>

<style>
  .jam-title {
    margin-block-start: 20px;
    margin-block-end: 100px;
  }

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
