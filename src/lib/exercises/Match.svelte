<script lang="ts">
	import { randomize } from '$lib/utils/helpers';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const handleCompletion = () => {
		dispatch('completed', {
			status: 'success',
			message: 'Well done, keep it up!'
		});
	};

	const checkPair = () => {
		if (options[selectedKey] === selectedValue) {
			pairedKeys = [...pairedKeys, selectedKey];
			pairedValues = [...pairedValues, selectedValue];
		} else {
			const label = document.querySelector(`.value-${selectedValue.replace(" ", "-")}`);
			const errorClass = ["variant-soft-warning", "transition-color", "ease-in-out", "wrong-answer"]
			label?.classList.add(...errorClass);
			setTimeout(()=>label?.classList.remove(...errorClass), 400)
		}
	};

	interface Pairs {
		[key: string]: string;
	}

	export let options: Pairs;
	const keys = randomize(Object.keys(options));
	const values = randomize(Object.values(options));
	let pairedKeys: string[] = [];
	let pairedValues: string[] = [];
	let selectedKey: string = '';
	let selectedValue: string = '';

	$: if (selectedKey && selectedValue) {
		checkPair();
		selectedKey = '';
		selectedValue = '';
	}
</script>

<div class="grid grid-cols-2 gap-x-12 md:gap-x-24 mt-8 mb-8">
	<div class="keys flex flex-col gap-4">
		{#each keys as key}
			<label
				class="chip text-base font-semibold {selectedKey === key
					? 'variant-filled-surface'
					: 'variant-filled'} {pairedKeys.includes(key) ? 'variant-soft-success' : ''}"
			>
				<input
					bind:group={selectedKey}
					class="hidden"
					disabled={pairedKeys.includes(key)}
					name="options"
					type="radio"
					value={key}
				/>
				{key}
			</label>
		{/each}
	</div>
	<div class="keys flex flex-col gap-4">
		{#each values as value}
			<label
				class="chip text-base font-semibold value-{value.replace(" ", "-")} {selectedValue === value
					? 'variant-filled-surface'
					: 'variant-filled'} {pairedValues.includes(value) ? 'variant-soft-success' : ''}"
			>
				<input
					bind:group={selectedValue}
					class="hidden"
					disabled={pairedValues.includes(value)}
					name="options"
					type="radio"
					{value}
				/>
				{value}
			</label>
		{/each}
	</div>
</div>
<div class="pb-8">
	<button
		class="btn variant-filled-primary w-full"
		disabled={pairedKeys.length !== keys.length && pairedValues.length !== values.length}
		on:click={handleCompletion}
	>
		Proceed
	</button>
</div>

<style>
	@keyframes horizontal-shaking {
		0% { transform: translateX(0) }
		25% { transform: translateX(5px) }
		50% { transform: translateX(-5px) }
		75% { transform: translateX(5px) }
		100% { transform: translateX(0) }
	}
	.wrong-answer {
		animation: 300ms linear horizontal-shaking infinite
	}

</style>
