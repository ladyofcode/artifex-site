<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    export let galleryId;
    export let image;

    let gallery, item;
    
    onMount(() => {
        let lightbox = new PhotoSwipeLightbox({
          gallery: gallery,
          children: item,
          pswpModule: () => import('photoswipe'),
        });
        lightbox.init();})
      </script>
    
        <div class="pswp-gallery" id={galleryId} bind:this={gallery}>
        <a
              href={image.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              rel="noreferrer"
              bind:this={item}
            >
              <img src={image.src} alt="" />
              </a>
        </div>
    
    <style>
        .pswp-gallery {
            margin-top: var(--space-xxxxl);
        }

        img {
            margin-bottom: var(--space-md);
            border-radius: var(--border-radius);
        }
    </style>