<script>
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import FillBlank from '$lib/exercises/FillBlank.svelte';
	import Match from '$lib/exercises/Match.svelte';
	import MultipleChoice from '$lib/exercises/MultipleChoice.svelte';
	import Translate from '$lib/exercises/Translate.svelte';
	import { randomize } from '$lib/utils/helpers';

	const options = {
		fillBlank: {
			component: FillBlank,
			header: "Select the missing word",
		},
		match: {
			component: Match,
			header: "Tap the matching pairs",
		},
	  multipleChoice: {
			component: MultipleChoice,
			header: "Select the correct option",
		},
		translate: {
			component: Translate,
			header: "Translate this sentence",
		},
	}

	const unlockNext = (event) => {
		const t = {
			background: `variant-filled-${event.detail.status}`,
			message: event.detail.message,
		};
		toastStore.trigger(t);
		lockedState = false;
	}

	const onNexthandler = () => lockedState = true;

  export let data;
	$: exercises = randomize(data.content);
	$: lockedState = data.lock;
</script>

<div class="container mx-auto p-4 max-w-prose">
	<h1 class="h1 mt-8">{data.title}</h1>
	<p class="mt-4">{data.description}</p>
	<section class="my-16">
		{#key exercises }
			<Stepper on:next={onNexthandler} >
				{#each exercises as exercise}
					<Step locked={lockedState}>
						<svelte:fragment slot="header">{options[exercise.type].header}</svelte:fragment>
						<svelte:component
						  this={options[exercise.type].component}
							on:completed={unlockNext}
							{...exercise}
						 />
					</Step>
				{/each}
			</Stepper>
		{/key}
		<Toast />
	</section>
</div>

