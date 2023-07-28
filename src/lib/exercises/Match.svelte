<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let text = "Check";
  let buttonClass = ""

  const handleClick = () => {
    dispatch('completed', 'Proceed')
    text = "Completed!";
    buttonClass = "variant-filled-success"
  }
</script>

<button class="btn variant-filled-primary {buttonClass}" on:click={handleClick}>{text}</button>