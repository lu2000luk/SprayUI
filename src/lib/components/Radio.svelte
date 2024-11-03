<script>
    //@ts-nocheck
    let { radios, name } = $props();
</script>

<div class="radio-group flex flex-col">
    {#each radios as radio}
        <label class="radio">
            <input type="radio" checked class="m-2 appearance-none w-4 h-4 rounded-full border-2 border-secondary checked:bg-secondary checked:border-secondary hover:border-opacity-85 transition-all duration-200" name={name} value={radio} />
            <span>{radio}</span>
        </label>
    {/each}
</div>