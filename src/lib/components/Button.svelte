<script>
    //@ts-nocheck
	let { children } = $props();
</script>

<button class="py-2 px-4 m-2 bg-secondary hover:bg-opacity-85 hover:px-5 backdrop-blur-lg transition-all hover:shadow-lg shadow-sm duration-200">
    {@render children()}
</button>
