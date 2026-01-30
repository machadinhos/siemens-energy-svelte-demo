<script lang="ts">
  import Icon from '$lib/components/svg-icons/Icon.svelte';
  import { InfoIcon } from '$lib/components/svg-icons/index.js';
  import Toggle from '$lib/components/Toggle.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

  let { data } = $props();
</script>

<div class="flex items-center gap-1">
  <Toggle bind:enabled={data.request.scopeTab.isNewInstallation}>toggle new installation</Toggle>
  <Tooltip>
    {#snippet trigger()}
      <Icon color="var(--color-primary)" src={InfoIcon} />
    {/snippet}

    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.tooltip}
  </Tooltip>
</div>
