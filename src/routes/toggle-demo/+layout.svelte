<script lang="ts">
  import { page } from '$app/state';
  import { Toggle } from '$components';

  let { children } = $props();

  let isToggleEnabled = $state(false);
  let currentPage = $derived(page.url.pathname.split('/')[2]);

  function test() {
    console.log('test123');
  }
</script>

<Toggle bind:enabled={isToggleEnabled}>toggle test</Toggle>

<p class="mb-2">
  {#if isToggleEnabled}
    I'm enabled
  {:else}
    I'm disabled
  {/if}
</p>

<div class="flex gap-2">
  <a class={[currentPage === 'scope-tab' && 'text-primary underline']} href="/toggle-demo/scope-tab">scope</a>
  <a class={[currentPage === 'gt-tab' && 'text-primary underline']} href="/toggle-demo/gt-tab">gt</a>
</div>

<button class="mt-4 rounded border border-gray-300 p-2" onclick={test} type="button"> Click me to test </button>

{@render children()}
