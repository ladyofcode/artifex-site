<script>
	import Rules from '../../../content/single-pages/rules.md';
</script>

<!-- import { metadata as rulesMetadata } from '$content/single-pages/rules.md'; -->

<main class="page-container">
	<section class="template-wrapper">
    <div class="content">
      <h1>Rules</h1>
			<Rules />
		</div>
	</section>
</main>

<style>
	:global(h1) {
		font-size: 3rem;
		color: black;
    margin-block-start: var(--space-md);
    margin-block-end: var(--space-xxxxl);
	}

  :global(h1:not(:first-child)) {
    margin-block-start: 10rem;
	}

	:global(h2) {
		font-family: 'Jura Variable', Arial, Helvetica, sans-serif;
    margin-bottom: 0.5rem;
	}
	:global(p) {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
	}

  :global(li:not(:first-child) p) {
    margin: 0;
    margin-top: 0.5rem;
  }

  :global(li:first-child p){
    margin-bottom: 0.5rem;
  }

  :global(.content h2:not(:first-child)){
    margin-top: var(--space-xxxxl);
  }

  :global(p:has(+ ul)){
    margin-top: 2.4rem;
    margin-bottom: 0.5rem;
  }

	.template-wrapper {
		display: flex;
    flex-direction: column;
		justify-content: center;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		padding-inline: var(--space-xxl);
	}
 
</style>
