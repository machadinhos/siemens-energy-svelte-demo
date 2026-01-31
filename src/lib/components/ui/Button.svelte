<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  type Props = {
    onclick: () => void | Promise<void>;
    children: import('svelte').Snippet;
    type?: HTMLButtonElement['type'];
    color?: 'primary' | 'secondary';
    class?: ClassValue;
  };

  let { children, onclick, type = 'button', color = 'primary', class: className }: Props = $props();
</script>

<button
  class={[
    color === 'primary' && 'bg-primary text-white',
    color === 'secondary' && 'bg-secondary',
    ' cursor-pointer rounded-2xl p-1 [corner-shape:squircle]',
    className,
  ]}
  {onclick}
  {type}
>
  {@render children()}</button
>
