<script>
    //@ts-nocheck
	let { children } = $props();
</script>

<div class="card border-2 border-solid bg-secondary hover:bg-opacity-75 transition-all backdrop-blur-lg p-2 m-2">
    {@render children()}
</div>
