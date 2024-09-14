<script>
	const mockImageSrc = '/images/homepage.jpg';
</script>

<div class="description-wrapper">
	<div class="description">
		<h1>AFX x CSSA Annual Game Jam</h1>
		<p>Some descriptive text here to start the GJ, v. fun thing to do</p>
		<button>GET STARTED</button>
		<!-- <p>{description}</p> -->
	</div>
	<!-- <div class="image-mocker"></div> -->
	<div class="image-container">
    <img src={mockImageSrc} alt="mock" />
  </div>
</div>

<style>
	h1 {
		font-size: 40px;
		font-weight: 900px;
		line-height: 48.41px;
		color: white;
		margin-bottom: 17px;
	}

	p {
		font-size: 20px;
		line-height: 24.2px;
		color: white;
		margin-bottom: 10px;
	}

	button {
		color: #ffc700;
		font-size: 17.95px;
		line-height: 24.51px;
		font-weight: 700;
		background: none;
		border: none;
		padding: 0;
	}

	button:hover {
		cursor: pointer;
	}

	.description-wrapper {
		display: flex;
		gap: 80px;
		justify-content: space-between;
		align-items: center;
    margin-bottom: 364px;
	}

	.description {
		padding-block: 10px;
		max-width: 500px;
		line-height: 2;
		font-size: 1.1rem;
	}

	img {
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 100%;
	}

	.image-container {
    max-width: 563px;
    max-height: 450px;
		flex-shrink: 0;
		border-radius: 16px;
		overflow: hidden;
		object-fit: fill;
		object-position: center;
		/* background-color: purple; */
	}

  @media (max-width: 999px) {
    .description-wrapper {
      flex-direction: column;
      gap: 40px;
    }
  }
</style>
