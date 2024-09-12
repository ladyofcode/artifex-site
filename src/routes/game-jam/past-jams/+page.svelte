<script lang="ts">
	import * as config from '$lib/config';

	export let data;
</script>

<main class="page-container">
	<section>
		<h1>Past game jams</h1>

		<p>Below is a list of past Game Jams we've co-hosted along with the CSSA at the ANU.</p>

		<div class="page-content">
			{#each data.posts as post}
				<a href={'/game-jam/past-jams/' + post.slug}>
					<div id="list-item">
						<h2>{post.title}</h2>
						<p>
							{new Date(post.date).toLocaleDateString('en-gb', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</main>
