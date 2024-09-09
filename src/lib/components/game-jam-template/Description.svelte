<script>
	export let description;
	export let imageSrc;
</script>

<div class="description-wrapper">
    <div class="description">
      {description}
    </div>
    <!-- <div class="image-mocker"></div> -->
     <div class="image-container"><img src={imageSrc} alt="mock"/></div>
</div>

<style>
	.description-wrapper{
		display: flex;
    gap: 40px;
    align-items: start;
    justify-content: space-between;
    padding-inline: 20px;
	}

  .description{
    padding-block: 10px;
    max-width: 500px;
    line-height: 2;
    font-size: 1.1rem;
  }

  img{
    object-fit: cover;
    object-position: center;
    width:100%;
    height:100%;
  }

  .image-container{
    width: 480px;
    height: 360px;
    flex-shrink: 0;
    border-radius: 16px;
    overflow: hidden;
    object-fit: fill;
    object-position: center;
    background-color: purple;
  }
</style>
