<script generics="T" lang="ts">
  import type { Snippet } from 'svelte';

  type Header<T> = {
    label: string;
  } & ({ key: keyof NoInfer<T>; snippet?: never } | { snippet: Snippet<[NoInfer<T>]>; key?: never });

  type Props<T> = {
    headers: Header<T>[];
    rows: T[];
  };

  let { headers, rows }: Props<T> = $props();
</script>

<table class="table-auto">
  <thead class="bg-primary text-white">
    <tr>
      {#each headers as { label, key } (key)}
        <th>{label}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row, index (index)}
      <tr class="odd:bg-secondary-dark even:bg-secondary">
        {#each headers as { key, snippet } (key)}
          <td>
            {#if snippet}
              {@render snippet(row)}
            {:else}
              <!-- eslint-disable-next-line @typescript-eslint/no-non-null-assertion -->
              {row[key!]}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  th,
  td {
    outline: 1px solid white;
    padding: calc(var(--spacing) * 2);
    padding-inline: calc(var(--spacing) * 4);
  }
</style>
