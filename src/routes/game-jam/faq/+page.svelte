<script>
	import FAQ from '../../../content/single-pages/faq.md';
</script>

<!-- import { metadata as rulesMetadata } from '$content/single-pages/rules.md'; -->

<main class="page-container">
	<section class="template-wrapper">
    <div>
      <div class="title">
        <h1>FAQ</h1>
      </div>
  
      <FAQ />

    </div>
	</section>
</main>

<style>
	h1 {
		font-size: 3rem;
		color: black;
	}

	.title {
		margin-block-start: var(--space-md);
		margin-block-end: var(--space-xxxxl);
	}
  :global(h2) {
    font-family: 'Jura Variable', Arial, Helvetica, sans-serif;
  }
  :global(p) {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;

  }
	.template-wrapper {
		display: flex;
		justify-content: center;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		padding-inline: var(--space-xxl);
	}

  .template-wrapper > div {
    display: flex;
    flex-direction: column;
  }

</style>
