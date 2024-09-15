<script>
	import { onMount } from "svelte";

  export let src;
  let item, img;

  onMount(()=>{
    item.setAttribute("data-pswp-width", img.naturalWidth);
		item.setAttribute("data-pswp-height", img.naturalHeight);
  })
</script>

<a
	class="image-wrapper"
	href={src}
	data-pswp-width={1024}
	data-pswp-height={768}
	rel="noreferrer"
  bind:this={item}
>
	<img src={src} alt="" bind:this={img}/>
</a>
