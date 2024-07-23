<script>
    export let src = ""
    export let alt = ""
    export let width = "100%"
    export let dimensions = {
        height: "540px",
        width: "960px"
    }

</script>

<a 
    href="{src}"
    data-pswp-width = "{dimensions.width}"
    data-pswp-height = "{dimensions.height}"
    target="_blank"
    rel="noreferrer"
    style="width:{width}"
>
    <img src="{src}" alt="{alt}" style="width:100%" >
</a>

<style>
    a{
        width: 100%;
    }
</style>
