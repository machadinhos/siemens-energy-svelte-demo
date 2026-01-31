<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    trigger: Snippet;
  };

  let { children, trigger }: Props = $props();
  const id = $props.id();

  let tooltipElement: HTMLDivElement;
  let timeoutInstance: ReturnType<typeof setTimeout> | undefined;

  const onmouseenter = (): void => {
    if (timeoutInstance) clearTimeout(timeoutInstance);
    tooltipElement.showPopover();
  };

  const onmouseleave = (): void => {
    if (timeoutInstance) clearTimeout(timeoutInstance);
    timeoutInstance = setTimeout(() => tooltipElement.hidePopover(), 100);
  };
</script>

<button
  style="anchor-name: --tooltip-trigger-{id}"
  {onmouseenter}
  {onmouseleave}
  popovertarget="tooltip-{id}"
  type="button"
>
  {@render trigger()}
</button>

<div
  bind:this={tooltipElement}
  id="tooltip-{id}"
  style="position-anchor: --tooltip-trigger-{id}"
  class="rounded-md bg-dark-grey p-2 text-white"
  {onmouseenter}
  {onmouseleave}
  popover
  role="tooltip"
>
  {@render children()}
</div>

<style>
  div {
    position-area: bottom right;
    position-try-fallbacks: flip-block, flip-inline;
  }
</style>
