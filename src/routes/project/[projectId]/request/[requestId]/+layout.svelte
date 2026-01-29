<script lang="ts">
  import { page } from '$app/state';
  import Tabs from '$lib/components/Tabs.svelte';

  let { children, data } = $props();

  let formatter: Intl.NumberFormat | undefined;

  let currentPage = $derived(page.url.pathname.split('/').at(-1));
  let currentNumber = $state(0);
  let formattedNumber = $derived.by(() => {
    if (!formatter) formatter = new Intl.NumberFormat(navigator.language);
    return formatter.format(currentNumber);
  });

  const onSaveClick = async () => {};
</script>

<label>
  number input
  <input type="number" bind:value={currentNumber} />
</label>
<p>formatted number: {formattedNumber ?? 0}</p>

<p>Id: {data.request.id}</p>
<p>Name: {data.request.name}</p>

<button onclick={onSaveClick}>Save</button>

<Tabs
  class="mb-3"
  items={[
    { id: 'scope-tab', label: 'Scope', href: './scope-tab' },
    { id: 'gt-tab', label: 'GT', href: './gt-tab' },
    { id: 'digi-tab', label: 'Digi', href: './digi-tab' },
  ]}
  selected={currentPage ?? ''}
/>

{@render children()}
