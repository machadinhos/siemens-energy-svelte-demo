<script lang="ts">
  import Toggle from '$lib/components/Toggle.svelte';

  let { data } = $props();
</script>

<Toggle bind:enabled={data.request.scopeTab.isNewInstallation}>toggle new installation</Toggle>
