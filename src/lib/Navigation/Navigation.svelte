<script>
  import { drawerStore } from "@skeletonlabs/skeleton";
  function drawerClose() {
    drawerStore.close();
	}

  /**
	 * @type any
	 */
   export let lessons;
</script>

<h2 class="p-4 text-xl"><a href="/">Lessons</a></h2>
<hr />
<nav class="list-nav p-4">
	<ul>
    {#each lessons as lesson}
		  <li><a data-sveltekit-reload href="{lesson.id}" on:click={drawerClose}>{lesson.title}</a></li>
    {/each}
	</ul>
</nav>