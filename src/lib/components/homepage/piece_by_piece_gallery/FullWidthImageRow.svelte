<script>
    import { onMount } from "svelte";
    export let src = "";
    export let alt = "";
    export let dimensions;
    import Image from "./Image.svelte";
    import gsap from "gsap";

    let container;
    onMount(() => {
        const ctx = gsap.context((self) => {
            const image = self.selector("img")[0];
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: image,
    			toggleActions: 'play none none reverse'

            }
        });
            tl.from(image, { yPercent: 100, ease:"power4.out", duration: 2 });
        }, container);

        return () => ctx.revert();
    });
</script>

<figure class="full-width-row clip" bind:this={container}>
    <Image {src} {alt} {dimensions} width="100%" />
</figure>

<style>
    figure {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        border-radius: var(--border-radius);
        overflow: hidden;
    }
</style>
