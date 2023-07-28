<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let selected: string = "";

  const handleSubmit = () => {
    if (answer == selected) {
      dispatch('completed', {
        status: 'success',
        message: 'Good job!'
      })
    } else {
      dispatch('completed', {
        status: 'error',
        message: `The answer is "${question[0]} ${answer} ${question[1]}""`
      })
    }

  }

  export let question: string[];
  export let answer: string;
  export let options: string[];
</script>

<h2 class="h2">
  {question[0]}
  <span class="inline-flex align-text-bottom justify-center min-w-[8ch] px-[2ch] border-b-2 border-b-gray-200">
    {#if selected}
      <span class="chip text-base variant-filled mb-1">{selected}</span>
    {/if}
  </span>
  {question[1]}
</h2>
<form on:submit|preventDefault={handleSubmit}>
  <fieldset class="flex flex-col gap-4 mt-8">
    {#each options as option}
      <label class="chip text-base {selected === option ? "variant-ghost" : "variant-filled"}">
        <input
          bind:group={selected}
          name="options"
          type="radio"
          value={option}
        />
        {option}
      </label>
    {/each}
  </fieldset>
  <button class="btn my-8 variant-filled-primary w-full md:w-fit" type="submit">
    Check
  </button>
</form>

<style>
  input[type="radio"] {
    display: none;
  }
</style>


