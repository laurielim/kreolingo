<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { randomize } from '$lib/utils/helpers';
	const dispatch = createEventDispatcher();

	let selected: string[] = [];

	const removeSelected = (event) => {
		const value = event.target.innerHTML;
		selected = selected.filter((word) => word !== value.replace(" ", ""));
	}

	const handleCheck = (event) => {
		const value = event.target.value;
		if (event.target.checked) {
			selected = [...selected, value];
		} else {
			selected = selected.filter((word) => word !== value);
		}
	};

	const handleSubmit = () => {
		let status = 'success';
		let message = "That's correct, good job";

		if (answer != selected.join(' ')) {
			status = 'error';
			message = `The answer is "${answer}"`;
		}

		dispatch('completed', {
			status,
			message
		});
	};

	export let question: string;
	export let answer: string;
	export let options: string[];
	const randomizedOptions = randomize(options);

</script>

<h2 class="h2">{question}</h2>

<div class="min-h-[152px] answer-container">
	<div class="inline-flex flex-wrap gap-x-2 gap-y-4">
		{#each selected as word}
			<button
			  class="chip text-base variant-filled"
				on:click={removeSelected}
			>
				{word}
			</button>
		{/each}
	</div>
</div>
<form on:submit|preventDefault={handleSubmit}>
	<fieldset class="flex gap-4 mt-8">
		{#each randomizedOptions as option}
			<label
				class="chip text-base font-semibold {selected.includes(option)
					? 'variant-ghost opacity-50'
					: 'variant-filled'}"
			>
				<input
					class="hidden"
					type="checkbox"
					name="flavours"
					value={option}
					on:change={handleCheck}
				/>
				{option}
			</label>
		{/each}
	</fieldset>
	<button class="btn my-8 variant-filled-primary w-full" disabled={!selected.length} type="submit">
		Check
	</button>
</form>

<style>
	.answer-container {
		--p1: 30%;
		--p2: 64%;
		--p3: 98%;
		--line-1: calc(var(--p1) - 1px);
		--line-2: calc(var(--p2) - 1px);
		--line-3: calc(var(--p3) - 1px);
		background-image: linear-gradient(
			180deg,
			transparent 0,
			transparent var(--line-1),
			white var(--line-1),
			white var(--p1),
			transparent var(--p1),
			transparent var(--line-2),
			white var(--line-2),
			white var(--p2),
			transparent var(--p2),
			transparent var(--line-3),
			white var(--line-3),
			white var(--p3),
			transparent var(--p3)
		);
	}
</style>
