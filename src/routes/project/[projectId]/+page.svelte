<script lang="ts">
  import { page } from '$app/state';
  import { Table } from '$components-ui';
  import type { Request } from '$types';

  let { data } = $props();
</script>

{#snippet requestIdRender(request: Request)}
  <a href="/project/{page.params.projectId}/request/{request.id}/scope-tab">{request.id}</a>
{/snippet}

<Table
  headers={[
    { label: 'Id', snippet: requestIdRender },
    { key: 'name', label: 'Name' },
  ]}
  rows={data.requests}
/>
