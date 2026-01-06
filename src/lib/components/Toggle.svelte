<script lang="ts">
  import { type Snippet } from 'svelte';

  type Props = {
    enabled: boolean;
    children: Snippet;
  };

  let { enabled = $bindable(), children }: Props = $props();
</script>

<label class="inline-flex cursor-pointer items-center">
  <input class="peer sr-only" type="checkbox" bind:checked={enabled} />
  <div
    class="peer peer-checked:after:border-buffer relative h-5 w-9 rounded-full bg-gray-300 peer-checked:bg-primary peer-focus:outline-none after:absolute after:start-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"
  ></div>
  <span class="ms-3 text-sm font-medium select-none">{@render children()}</span>
</label>
