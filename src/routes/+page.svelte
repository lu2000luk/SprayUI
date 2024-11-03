<script lang="ts">
    import Component from "$lib/website/component.svelte";

    // UI Components
    import Button from "$lib/components/Button.svelte";
    import Badge from "$lib/components/Badge.svelte";
    import Input from "$lib/components/Input.svelte";
    import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Avatar from "$lib/components/Avatar.svelte";
    import Radio from "$lib/components/Radio.svelte";
	import Link from "$lib/components/Link.svelte";

    // Page Logic

    const title = "SprayUI";
    let titleChanger = 0;

    function randomNumberBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getRandomTransform() {
        return `translate(${randomNumberBetween(-8, 8)}%, ${randomNumberBetween(-8, 8)}%) rotate(${randomNumberBetween(-5, 5)}deg)`;
    }

    setInterval(() => {
        titleChanger++;
    }, 500);
</script>

<svelte:head>
    <title>
        Spray UI
    </title>
</svelte:head>

<h1 class="title mt-[20vh] ml-[20vh] text-[10rem] flex" id="title">
    {#key titleChanger}
        {#each title.split("") as letter}
            <p class="letter" style="transform: {getRandomTransform()};">{letter}</p>
        {/each}
    {/key}
</h1>

<div class="description mt-2 ml-[20vh] text-lg">
    A simple UI library made with <Link link="https://tailwindcss.com/">TailwindCSS</Link> and <Link link="https://svelte.dev/">Svelte</Link> by <Link link="https://lu2000luk.com/">lu2000luk</Link>
</div>
<div class="my-20"></div>
<div class="flex justify-center">
    <div class="components grid grid-cols-4 gap-6">
        <Component name="Button" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Button.svelte">
            <Button>Hello world!</Button>
        </Component>
        <Component name="Badge" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Badge.svelte">
            <Badge>Admin</Badge>
        </Component>
        <Component name="Input" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Input.svelte">
            <Input placeholder="Type something..." />
        </Component>
        <Component name="Card" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Card.svelte">
            <Card>
                <div class="p-4">
                    <h1 class="text-2xl">Card Title</h1>
                    <p class="text-lg">This is a card</p>
                </div>
            </Card>
        </Component>
        <Component name="Checkbox" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Checkbox.svelte">
            <Checkbox />
        </Component>
        <Component name="Avatar" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Avatar.svelte">
            <Avatar image="https://unsplash.it/100/100" />
        </Component>
        <Component name="Radio" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Radio.svelte">
            <Radio radios={["A", "B", "C"]} name="Example" />
        </Component>
        <Component name="Link" link="https://github.com/lu2000luk/SprayUI/blob/master/src/lib/components/Link.svelte">
            <Link link="https://lu2000luk.com/">Website</Link>
        </Component>
    </div>
</div>

<div class="flex justify-center mt-10">
    <p>More components coming soon!</p>
</div>

<br>
<br>
<br>