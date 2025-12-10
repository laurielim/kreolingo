<script>
	import NewsletterSignup from '$lib/components/NewsletterSignup.svelte';
</script>

<div class="container mx-auto p-4 max-w-prose">
	<h1 class="h1 mt-4 md:mt-8">This lesson does not exist.</h1>
	<p class="text">
		You've either reached the end or you tried to access a lesson that does not exist.
	</p>
	<p class="text">There is no active development but there may be more lessons in the future. You can sign up to the newsletter if you want to know where there are new lessons available.</p>
  <NewsletterSignup />
	<p class="text">Meanwhile, go back and practice previous lessons to solidify your learnings.</p>
	<a class="btn mt-8 variant-ghost" href="/"> Back to home </a>
</div>

<style>
	.text {
		@apply mt-4 text-xl leading-relaxed;
	}
</style>
