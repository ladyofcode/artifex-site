<script>
	import '@fontsource-variable/jura';
	export let events;

	events.sort((a, b) => {
		return a.date.getTime() - b.date.getTime();
	});

	let now = new Date();
	let comingIndex = 1000;

	if (events.length > 0 && now < events[events.length - 1].date) {
		comingIndex = events.filter((e) => e.date < now).length;
	}

	const formatter = new Intl.DateTimeFormat('en-AU', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		hour: 'numeric',
		hour12: true
	});
</script>

<div class="event-wrapper">
<h2>Events</h2>
<ul>
	{#each events as event, index (event)}
		{#if index < comingIndex}
			<li class="greyed">
				<h3 class="greyed-text">{event.title}</h3>
				<p class="greyed-text">
					<span>{formatter.format(event.date).replaceAll(', ', ' ')}</span> @ {event.location}
				</p>
			</li>
		{:else if index === comingIndex}
			<li class="highlight">
				<h3 class="highlight-text">{event.title}</h3>
				<p class="highlight-text">
					<span>{formatter.format(event.date).replaceAll(', ', ' ')}</span> @ {event.location}
				</p>
			</li>
		{:else}
			<li>
				<h3>{event.title}</h3>
				<p><span>{formatter.format(event.date).replaceAll(', ', ' ')}</span> @ {event.location}</p>
			</li>
		{/if}
	{/each}
</ul>
</div>

<style>
  .event-wrapper {
    margin-block: 20px;
  }

	ul {
		list-style-type: none;
		padding-left: 0;
	}

	li {
		padding-block: 6px;
		padding-inline: 4px;
	}

  li:not(:last-child){
		margin-bottom: 5px;
  }

	h2 {
		color: black;
	}

	h3,
	p {
		font-family: 'Jura Variable', Arial, Helvetica, sans-serif;
		color: black;
		margin: 0;
	}

	h3 {
		margin-bottom: 5px;
	}

	p {
		font-weight: 400;
	}

	.highlight {
		background-color: #eeeeee;
		border-radius: 8px;
	}

	.highlight-text {
		color: #ca9e00;
	}

	.greyed-text {
		color: #aaaaaa;
	}
</style>
