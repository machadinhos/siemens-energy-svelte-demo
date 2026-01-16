<script lang="ts">
  import { page } from '$app/state';

  let { children, data } = $props();

  let formatter: Intl.NumberFormat | undefined;

  let currentPage = $derived(page.url.pathname.split('/').at(-1));
  let currentNumber = $state(0);
  let formattedNumber = $derived.by(() => {
    if (!formatter) formatter = new Intl.NumberFormat(navigator.language);
    return formatter.format(currentNumber);
  });

  const onSaveClick = async () => {
    await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(data.request),
    });
  };
</script>

<label>
  number input
  <input type="number" bind:value={currentNumber} />
</label>
<p>formatted number: {formattedNumber ?? 0}</p>

<p>Id: {data.request.id}</p>
<p>Name: {data.request.name}</p>

<button onclick={onSaveClick}>Save</button>

<div class="mt-3 flex gap-2">
  <a class={[currentPage === 'scope-tab' && 'text-primary underline']} href="./scope-tab">scope</a>
  <a class={[currentPage === 'gt-tab' && 'text-primary underline']} href="./gt-tab">gt</a>
</div>

{@render children()}
