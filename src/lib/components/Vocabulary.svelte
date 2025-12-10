<script>
  import { modalStore } from '@skeletonlabs/skeleton';

  export let parent;
  export let data = {};
</script>
{#if $modalStore[0]}
  <div class="card py-4 px-8 w-modal-slim md:w-modal-wide relative">
    <header>
      <button class="btn-icon variant-filled font-bold absolute z-50 -top-2 -right-2" on:click={parent.onClose}>
        <span class="sr-only">Close modal </span>×
      </button>
    </header>
    <div class="grid grid-cols-2 gap-4 my-8">
      {#each Object.entries(data) as [key, value]}
        <div class="card variant-soft p-4 hover:shadow-md hover:variant-filled-surface">
            <p class="text-lg font-semibold tracking-wider">{value}</p>
            <p class="text-sm text-primary-500 tracking-widest">{key}</p>
        </div>
      {/each}
    </div>
    <footer class="modal-footer flex justify-end space-x-2">
      <button type="button" class="btn variant-ghost-surface" on:click={parent.onClose}>Close</button>
    </footer>
  </div>
{/if}
