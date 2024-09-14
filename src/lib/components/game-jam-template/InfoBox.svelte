<script>
	export let title;
	export let description;
	export let borderColor;
</script>

<main>
	<div class="info-box" style="border-color: {borderColor};">
		<h1>{title}</h1>
		<p>{description}</p>
	</div>
</main>

<style>
	.info-box {
		width: 254px;
		min-height: 226px;
		padding: 36px;
		border: 5px solid;
		border-radius: 16px;
	}

	h1 {
		margin: 0 0 15.6px 0;
		font-size: 20px;
		font-weight: 600px;
		line-height: 24.2px;
		color: white;
	}

	p {
		margin: 0;
		font-size: 14px;
		font-weight: 600px;
		line-height: 16.94px;
		color: white;
	}
</style>
