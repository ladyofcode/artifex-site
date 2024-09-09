<script>
	import Navbar from "./Navbar.svelte";
</script>

<main>
    <Navbar />
    <slot />
</main>

<style>
    main{
        background-color: black;
        height: 100vh;
        width: 100vw;
    }
</style>