<script>
// sponsors: { name: string, imageSrc: string, url: string }[]
export let sponsors = [];
</script>

<div class="wrapper">
<h2> Sponsor{sponsors.length > 1? "s":""}</h2>
<div class="sponsor-gallery">
  {#each sponsors as sponsor}
    <a class="sponsor-wrapper" href={sponsor.url}>
      <img src={sponsor.imageSrc} alt=""/>
      <h2>{sponsor.name}</h2>
    </a>
  {/each}
</div>
</div>

<style>
.wrapper {
  margin-block: 20px;
}

.sponsor-gallery{
  margin-block-start: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 20px
}

.sponsor-wrapper {
  width: 320px;
  text-align: center;
}

.sponsor-wrapper:hover{
  text-underline-offset: 2px;
  text-decoration-color: black;
}

.sponsor-wrapper > img{
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}
</style>