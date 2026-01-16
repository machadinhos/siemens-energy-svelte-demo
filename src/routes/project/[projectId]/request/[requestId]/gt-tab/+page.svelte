<script lang="ts">
  let { data } = $props();
</script>

<div>
  {#if data.request.scopeTab.isNewInstallation}
    <p>Is new Installation</p>
  {:else}
    <p>Is not new Installation</p>
  {/if}
</div>
