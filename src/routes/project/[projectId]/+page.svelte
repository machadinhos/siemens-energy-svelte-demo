<script lang="ts">
  import { page } from '$app/state';
  import Table from '$lib/components/Table.svelte';
  import type { PageProps } from './$types';
  import type { Request } from '$types';

  let { data }: PageProps = $props();
</script>

{#snippet requestIdRender(request: Request)}
  <a href="/project/{page.params.projectId}/request/{request.id}/scope-tab">{request.id}</a>
{/snippet}

<Table
  headers={[
    { key: 'id', label: 'Id', snippet: requestIdRender },
    { key: 'name', label: 'Name' },
  ]}
  rows={data.requests}
/>
