<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let selected: string = '';

	const handleSubmit = () => {
		let status = 'success';
		let message = `That's correct, it means "${translation}"`;

		if (answer != selected) {
			status = 'error';
			message = `The answer is "${question[0]} ${answer} ${question[1]}"`;
		}

		dispatch('completed', {
			status,
			message
		});
	};

	export let question: string[];
	export let answer: string;
	export let options: string[];
	export let translation: string;
</script>

<h2 class="h2">
	{question[0]}
	<span
		class="inline-flex align-text-bottom justify-center min-h-[34px] min-w-[8ch] px-[2ch] border-b-2 border-b-gray-200"
	>
		{#if selected}
			<span class="chip variant-filled md:text-base mb-1">{selected}</span>
		{/if}
	</span>
	{question[1]}
</h2>
<form on:submit|preventDefault={handleSubmit}>
	<fieldset class="flex flex-col gap-4 mt-8">
		{#each options as option}
			<label
				class="chip text-base font-semibold {selected === option
					? 'variant-ghost opacity-50'
					: 'variant-filled'}"
			>
				<input bind:group={selected} class="hidden" name="options" type="radio" value={option} />
				{option}
			</label>
		{/each}
	</fieldset>
	<button class="btn my-8 variant-filled-primary w-full" disabled={!selected} type="submit">
		Check
	</button>
</form>
