<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';

	function drawerOpen(): void {
			drawerStore.open({
			width: 'w-[280px] md:w-[400px]',
		});
	}

	export let data;
</script>

<!-- Drawer Overlay -->
<Drawer>
	<Navigation lessons={data.lessons} />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-56">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4"  on:click={drawerOpen}>
							<span>
									<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
											<rect width="100" height="20" />
											<rect y="30" width="100" height="20" />
											<rect y="60" width="100" height="20" />
									</svg>
							</span>
					</button>
					<a href="/"><strong class="text-xl uppercase">Kreolingo</strong></a>
			</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn"
					href="/about"
					target="_blank"
					rel="noreferrer"
				>
					About
				</a>
				<a
				class="btn"
				href="https://github.com/laurielim/kreolingo"
				target="_blank"
				rel="noreferrer"
			>
				Github
			</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation lessons={data.lessons} />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
