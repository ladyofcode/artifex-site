<script lang="ts">
	import * as config from '$lib/config';

	export let data;

</script>

<section>

    <h1>Past Game Jams</h1>
	<div class="page-content">
		{#each data.posts as post}
			<a href={'/past-jams/' + post.slug}>
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

<style>
    h1, h2, h3, p, ul, li {
		color: black;
	}
</style>