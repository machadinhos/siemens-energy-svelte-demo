<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head><link href={favicon} rel="icon" /></svelte:head>

<div class="h-screen w-screen bg-gray-500">
  {@render children()}
</div>
