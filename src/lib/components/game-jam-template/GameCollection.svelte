<script>
	import GameCard from "./GameCard.svelte";

  export let gameData; // : { gameName: string, images: {src: string, width: number, height: number}[], members: string[], gameUrl: string, isPlayable: bool }
</script>

<div class="wrapper">
  {#each gameData as game (game.gameName)}
    <GameCard images={game.images} members={game.members} gameName={game.gameName} gameUrl={game.gameUrl} isPlayable={game.isPlayable}></GameCard>
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: var(--gallery-width);
  }
</style>