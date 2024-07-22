<script>
    import { onMount } from "svelte";
    import Image from "./Image.svelte";
    import gsap from "gsap";
    export let images = [];

    let container;

    onMount(() => {
        const ctx = gsap.context((self) => {
            const images = self.selector("img");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "80% bottom",
        			toggleActions: 'play none none reverse'
                },
            });

            const rows = [];
            let row = [];
            for (let index = 0; index < images.length; index++) {
                const element = images[index];
                if (index === 0) {
                    rows.push(row);
                    row.push(element);
                } else if (index % 4 > 0) {
                    row.push(element);
                } else {
                    row = [element];
                    rows.push(row);
                }
            }

            const oddRows = rows.filter((row, index) => index % 2 > 0);
            const evenRows = rows.filter((row, index) => index % 2 === 0);

            const tweens = [];

            for (let index = 0; index < oddRows.length; index++) {
                const elements = oddRows[index];
                for (let y = 0; y < elements.length; y++) {
                    const element = elements[y];
                    if (y % 2 === 0) {
                        tweens.push(
                            gsap.from(element, { yPercent: 110, duration: 2 }),
                        );
                    } else {
                        tweens.push(
                            gsap.from(element, { yPercent: -110, duration: 2 }),
                        );
                    }
                }
            }

            for (let index = 0; index < evenRows.length; index++) {
                const elements = evenRows[index];
                for (let y = 0; y < elements.length; y++) {
                    const element = elements[y];
                    if (y % 2 === 0) {
                        tweens.push(
                            gsap.from(element, { yPercent: -110, duration: 2 }),
                        );
                    } else {
                        tweens.push(
                            gsap.from(element, { yPercent: 110, duration: 2 }),
                        );
                    }
                }
            }

            tl.add(tweens);
        }, container);
        return () => ctx.revert();
    });
</script>

<div class="quarter-container" bind:this={container}>
    {#each images as image}
        <figure>
            <Image src={image.src} alt={image.alt} dimensions="{image.dimensions}" />
        </figure>
    {/each}
</div>

<style>
    .quarter-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    figure {
        width: 25%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
</style>
