<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let selected: string = '';

	const handleSubmit = () => {
		let status = 'success';
		let message = "Yes, that's right!";

		if (answer != selected) {
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
</script>

<h2 class="h2">{question}</h2>
<form on:submit|preventDefault={handleSubmit}>
	<fieldset class="flex flex-col gap-4 mt-8">
		{#each options as option}
			<label
				class="chip text-base font-semibold {selected === option
					? 'variant-filled-surface'
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
