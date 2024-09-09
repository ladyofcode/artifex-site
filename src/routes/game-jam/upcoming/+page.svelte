<script>
	import Description from "$lib/components/game-jam-template/Description.svelte";
  let mockDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" + 
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
      "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
      "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" +
      "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let mockImageSrc = "/images/piece_by_piece/pbp3.png";
</script>

<div class="template-wrapper">
  <div>
  <div>
    <h1>Game Jam 2025</h1>
  </div>
  <Description description={mockDesc} imageSrc={mockImageSrc}></Description>
  <a class="link-button" href="google.com" tabindex="0">Read the rules</a>
  </div>
</div>


<style>
  h1{
    font-size: 3rem;
    color: black;
  }

  .template-wrapper{
    display: flex;
    justify-content: center;
  }

  .template-wrapper > div{
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;
  }

  .link-button{
    all: unset;
    padding-block: 10px;
    padding-inline: 60px;
    border-radius: 5px;
    background-color: #95d8db;
    user-select: none;
    cursor: pointer;
  }
</style>