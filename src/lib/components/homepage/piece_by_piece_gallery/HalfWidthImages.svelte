<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import Image from "./Image.svelte";

    export let image1;
    export let image2;

    let container;

    onMount(() => {
        const ctx = gsap.context((self) => {
            const images = self.selector("img");
            const image1 = images[0];
            const image2 = images[1]

            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: container,
                start: "center bottom",            
			    toggleActions: 'play none none reverse'
            }
            });
            tl.fromTo(image1, {yPercent:100}, {
            rotation: 15,
            yPercent: 80,
            duration: 1,
            ease: "back.out"
            })
            .fromTo(
                image2, {yPercent: 100},
                {
                    rotation: -15,
                    yPercent: 70,
                    ease: "back.out",
                    duration: 1
                },
                "-=0.5"
            )
            .to(image1, {
                delay: 0.1,
                rotation: 0,
                duration: 1,
                yPercent: 0
            })
            .to(
                image2,
                {
                    delay: 0.1,
                    rotation: 0,
                    duration: 1,
                    yPercent: 0
                },
                ">"
            )

        }, container)

        return () => ctx.revert() 
    })

</script>
<div class="half-width-container clip" bind:this="{container}">
    <Image {...image1} width="50%"/>
    <Image {...image2} width=50%/>
</div>

<style>
  .half-width-container{
    display: flex;
    flex-direction: row;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    border-radius: var(--border-radius);
    overflow:hidden
  }

</style>
