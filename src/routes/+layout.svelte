<script lang="ts">
  import './layout.css';
  import { GlobalModal, ToastGroup } from '$lib/components/global';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<GlobalModal />
<ToastGroup />

<svelte:head><link href={favicon} rel="icon" /></svelte:head>

<div class="h-screen w-screen bg-background p-4 text-black">
  {@render children()}
</div>
