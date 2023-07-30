<script lang="ts">
  import { drawerStore } from "@skeletonlabs/skeleton";

  function drawerClose() {
    drawerStore.close();
	}

   export let lessons: any[];
   export let path: string;
   $: classesActive = (href: string) => (href === path.replace("/", "") ? 'variant-ghost-primary' : '');
</script>

<h2 class="p-4 text-xl"><a href="/">Lessons</a></h2>
<hr />
<nav class="list-nav p-4">
	<ul>
    {#each lessons as lesson}
		  <li class="my-2 text-lg">
        <a
          class="{classesActive(lesson.id)}"
          href="{lesson.slug}"
          on:click={drawerClose}>
            {lesson.title}
        </a>
      </li>
    {/each}
	</ul>
</nav>