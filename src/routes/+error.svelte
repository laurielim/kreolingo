<script>
	import { goto } from '$app/navigation';
</script>

<div class="container mx-auto p-4 max-w-prose">
	<h1 class="h1 mt-4 md:mt-8">Oops! Page not found!</h1>
	<p class="text">
		It looks like you're trying to access a page that has been deleted or never even existed.
	</p>
	<a class="btn mt-8 variant-filled" href="/"> Back to home </a>
</div>

<style>
	.text {
		@apply mt-4 text-xl leading-relaxed;
	}
</style>
