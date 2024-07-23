<script>
    import FullWidthImageRow from "./FullWidthImageRow.svelte";
    import gsap from "gsap";

    import HalfWidthImages from "./HalfWidthImages.svelte";
    import QuarterWidthImages from "./QuarterWidthImages.svelte";

    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";
    import { onMount } from "svelte";

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
    });

    onMount(() => lightbox.init());

    const halfWidthImageDimensions = {
        width: "960px",
        height: "540px",
    };
    const halfWidthImage1 = {
        src: "images/piece_by_piece/pbp16.png",
        alt: "",
        dimensions: halfWidthImageDimensions,
    };

    const halfWidthImage2 = {
        src: "images/piece_by_piece/pbp17.png",
        alt: "",
        dimensions: halfWidthImageDimensions,
    };

    const quarterDimensions = {
        height: "540px",
        width: "960px",
    };

    const fullWidthImage = {
        src: "images/piece_by_piece/pbp15.png",
        alt: "",
        dimensions: {
            width: "1903px",
            height: "898px",
        },
    };

    const quarterImages = [
        {
            src: "images/piece_by_piece/pbp7.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp8.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp9.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp10.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp11.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp12.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp13.png",
            alt: "",
            dimensions: quarterDimensions,
        },
        {
            src: "images/piece_by_piece/pbp14.png",
            alt: "",
            dimensions: quarterDimensions,
        },
    ];
</script>

<div class="custom-gallery" id="gallery">
    <FullWidthImageRow {...fullWidthImage} />

    <HalfWidthImages image1={halfWidthImage1} image2={halfWidthImage2}
    ></HalfWidthImages>

    <QuarterWidthImages images={quarterImages} />
</div>

<style>
    .custom-gallery {
        margin-top: var(--space-xxxxl);
        display: flex;
        gap: var(--space-md);
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
