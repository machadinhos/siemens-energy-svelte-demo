<script lang="ts" generics="T">
  import type { Snippet } from 'svelte';

  type Props = {
    headers: {
      key: keyof NoInfer<T>;
      label: string;
      snippet?: Snippet<[NoInfer<T>]>;
    }[];
    rows: T[];
  };

  let { headers, rows }: Props = $props();
</script>

<table class="table-auto">
  <thead class="bg-primary text-white">
    <tr>
      {#each headers as header}
        <th>{header.label}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr class="odd:bg-secondary-dark even:bg-secondary">
        {#each headers as col}
          <td>
            {#if col.snippet}
              {@render col.snippet(row)}
            {:else}
              {row[col.key]}
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
