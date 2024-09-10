<script>
  export let images; // : string[]
  export let gameName; // : string
  export let members; // : string[]
</script>

<div class="card-wrapper">
  <div class="gallery">

  </div>
  <h2>{gameName}</h2>
  <ul>
    {#each members as member}
    <li>{member}</li>
    {/each}
  </ul>
</div>

<style>
  .card-wrapper {
    width: 320px;
    padding-inline: 10px;
    padding-block: 20px;
  }

  .gallery {
    width: 100%;
    aspect-ratio: 4/3;
  }

  .gallery img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>