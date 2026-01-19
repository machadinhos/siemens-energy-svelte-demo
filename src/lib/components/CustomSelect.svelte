<script lang="ts">
  import { slide } from 'svelte/transition';

  interface Option {
    Value: string | number;
    Text: string;
  }

  let {
    label = 'Select',
    options = [],
    value = $bindable(),
    disabled = false,
    error = '',
    placeholder = 'Select...',
    // Snippet for tooltips/icons next to label
    extra = null,
  } = $props();

  let isOpen = $state(false);
  let container: HTMLDivElement;

  const displayText = $derived(options.find((o) => o.Value === value)?.Text || placeholder);

  function select(opt: Option) {
    value = opt.Value;
    isOpen = false;
  }

  // Close on click outside
  function handleClickOutside(e: MouseEvent) {
    if (container && !container.contains(e.target as Node)) isOpen = false;
  }
</script>

<svelte:window onclick={handleClickOutside} />

<div bind:this={container} class="relative w-full">
  <label class="mb-1 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
    {label}
    {#if extra}
      {@render extra()}
    {/if}
  </label>

  <button
    type="button"
    onclick={() => !disabled && (isOpen = !isOpen)}
    class="flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm shadow-sm transition-all
        {disabled ? 'cursor-not-allowed bg-gray-50 opacity-60' : 'hover:border-primary-500'}
        {error ? 'border-red-500 ring-1 ring-red-500' : 'focus:ring-primary-500 border-gray-300 focus:ring-2'}"
  >
    <span class={!value ? 'text-gray-400' : 'text-gray-900'}>{displayText}</span>
    <i class="material-icons transition-transform {isOpen ? 'rotate-180' : ''}">arrow_drop_down</i>
  </button>

  {#if isOpen}
    <div
      transition:slide={{ duration: 150 }}
      class="ring-opacity-5 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black focus:outline-none sm:text-sm"
    >
      {#if options.length === 0}
        <div class="px-4 py-2 text-gray-400">No items available</div>
      {:else}
        {#each options as opt}
          <button
            type="button"
            onclick={() => select(opt)}
            class="hover:bg-primary-50 flex w-full items-center px-4 py-2 text-left {value === opt.Value
              ? 'bg-primary-100 text-primary-900 font-semibold'
              : 'text-gray-700'}"
          >
            {opt.Text}
          </button>
        {/each}
      {/if}
    </div>
  {/if}

  {#if error}
    <p class="mt-1 text-xs text-red-500">{error}</p>
  {/if}
</div>
