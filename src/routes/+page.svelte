<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="container h-full mx-auto px-4 lg:px-8 flex justify-center">
	<div class="space-y-10 flex flex-col items-center">
		<h1 class="h2 mt-16 text-center">Welcome to Kreolingo</h1>
		<p class="leading-normal text-2xl text-center max-w-prose">
				A Duolingo ripoff to help you learn Mauritian Creole.
				I made this application to help my partner learn my mother tongue, maybe it
				can help you too.
		</p>
		<div class="grid gap-8 grid-cols-1 lg:grid-cols-3">
			{#each data.lessons as lesson}
				<a href="/{lesson.id}" class="block">
					<article class="card card-hover min-h-full py-4 px-8 variant-ghost-surface">
						<h2 class="mb-2 text-2xl font-bold tracking-tight">
							{lesson.title}
						</h2>
						<p class="text-gray-300">
							{lesson.description}
						</p>
					</article>
				</a>
			{/each}
		</div>
	</div>
</div>
