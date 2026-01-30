<script lang="ts">
  let { data } = $props();

  let formatter: Intl.NumberFormat | undefined;
  let currentNumber = $state(0);
  let formattedNumber = $derived.by(() => {
    if (!formatter) formatter = new Intl.NumberFormat(navigator.language);
    return formatter.format(currentNumber);
  });
</script>

<div>
  {#if data.request.scopeTab.isNewInstallation}
    <p>Is new Installation</p>
  {:else}
    <p>Is not new Installation</p>
  {/if}
</div>

<label>
  number input
  <input min="0" type="number" bind:value={currentNumber} />
</label>
<p>formatted number: {formattedNumber ?? 0}</p>
