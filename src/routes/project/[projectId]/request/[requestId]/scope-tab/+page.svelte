<script lang="ts">
  import { InfoIcon, Icon } from '$components-svg-icons';
  import { Tooltip, Toggle } from '$components-ui';

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
