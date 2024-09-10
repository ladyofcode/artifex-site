<script>
	import '@fontsource-variable/jura';
	export let isActive = true; // : boolean  // If true, events will be highlighted and greyed out
	export let events; // : { date : Date, location: string, title: string }

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
    <li class:greyed={isActive && index < comingIndex} class:highlight={isActive && index === comingIndex}>
      <h3 class:greyed-text={isActive && index < comingIndex} class:highlight-text={isActive && index === comingIndex}>{event.title}</h3>
      <p class:greyed-text={isActive && index < comingIndex} class:highlight-text={isActive && index === comingIndex}>
        <span>{formatter.format(event.date).replaceAll(', ', ' ')}</span> @ {event.location}
      </p>
    </li>
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

	h2, h3{
		color: black;
	}

	h3 {
		margin-block-start: 0;
		margin-block-end: 5px;
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
