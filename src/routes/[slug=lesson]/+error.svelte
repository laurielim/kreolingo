<script>
  import { page } from '$app/stores';
</script>

<div class="container mx-auto p-4 max-w-prose">
	<h1 class="h1 mt-4 md:mt-8">{$page.error.message}</h1>
  <p class="text">You've either reached the end or you tried to access a lesson that does not exist.</p>
  <p class="text">This is a work in progress so there will be more lessons in the future.</p>
  <p class="text">Meanwhile, go back and practice previous lessons to solidify your learnings.</p>
  <a class="btn mt-8 variant-filled" href="/">
    Back to home
  </a>
</div>
<style>
  .text {
    @apply mt-4 text-xl leading-relaxed;
  }
</style>