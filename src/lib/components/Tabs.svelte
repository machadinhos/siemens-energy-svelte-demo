<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  type Props = {
    items: {
      id: string;
      label: string;
      href: HTMLAnchorElement['href'];
    }[];
    selected: string;
    class: ClassValue;
  };

  let { items, selected, class: className }: Props = $props();
</script>

<div class="flex {className}">
  {#each items as item}
    <a
      href={item.href}
      class={[
        selected === item.id && 'rounded-t-md border-0 border-b-2 border-b-primary bg-background-dark',
        'inline-flex cursor-pointer items-center border-b border-b-background-dark p-2 focus:outline-none',
      ]}
    >
      <span class="text-sm sm:text-base"> {item.label} </span>
    </a>
  {/each}
</div>
