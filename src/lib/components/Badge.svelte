<script>
    //@ts-nocheck
	let { children } = $props();
</script>

<div class="py-1 px-8 rounded-full select-none cursor-pointer hover:shadow-md bg-background">
    {@render children()}
</div>
