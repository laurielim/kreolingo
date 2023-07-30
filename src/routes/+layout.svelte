<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { page } from "$app/stores";
	import { AppShell, AppBar, Drawer, drawerStore, Modal } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import HeaderLead from '$lib/components/HeaderLead.svelte';
	import HeaderTrail from '$lib/components/HeaderTrail.svelte';

	function drawerOpen(): void {
			drawerStore.open({
			width: 'w-[280px] md:w-[400px]',
		});
	}

	export let data;

	let path: string;
  $: path = $page.url.pathname;
</script>

<!-- Drawer Overlay -->
<Drawer>
	<Navigation lessons={data.lessons} {path} />
</Drawer>

<!-- Modal Overlay -->
<Modal buttonTextConfirm="Continue" />

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<HeaderLead />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<HeaderTrail />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation lessons={data.lessons} {path}/>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
