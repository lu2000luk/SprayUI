<script>
    //@ts-nocheck
    let { children, link } = $props();
</script>

<a href={link} class="underline decoration-wavy hover:px-2 py-2 hover:text-background hover:bg-text transition-all">
    {@render children()}
</a>
