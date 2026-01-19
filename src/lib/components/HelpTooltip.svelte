<script lang="ts">
  let { title, content, hyperlink = '', position = 'top' } = $props();

  let visible = $state(false);

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    alert('Path copied to clipboard!');
  }
</script>

<div class="relative inline-block">
  <button
    onmouseenter={() => (visible = true)}
    onmouseleave={() => (visible = false)}
    class="bg-primary-100 text-primary-600 hover:bg-primary-200 flex h-5 w-5 items-center justify-center rounded-full transition-colors"
  >
    <i class="material-icons text-[16px]">info</i>
  </button>

  {#if visible}
    <div
      class="absolute z-100 w-64 rounded-lg bg-gray-900 p-3 text-sm text-white shadow-xl
            {position === 'top' ? 'bottom-full left-1/2 mb-2 -translate-x-1/2' : 'top-0 left-full ml-2'}"
    >
      <div class="mb-1 font-bold">{title}</div>
      {#if content}
        <div class="mb-2 text-xs text-gray-300">{@html content}</div>
      {/if}
      {#if hyperlink}
        <hr class="my-2 border-gray-700" />
        {#if hyperlink.startsWith('file:')}
          <button
            onclick={() => copyToClipboard(hyperlink)}
            class="text-xs text-blue-400 underline hover:text-blue-300"
          >
            Copy Network Path
          </button>
        {:else}
          <a href={hyperlink} target="_blank" class="text-xs text-blue-400 underline hover:text-blue-300">
            View Documentation
          </a>
        {/if}
      {/if}
    </div>
  {/if}
</div>
