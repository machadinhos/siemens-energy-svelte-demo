<script lang="ts">
  import { page } from '$app/state';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {#each data.requests as request (request.id)}
      <tr>
        <td>
          <a href="/project/{page.params.projectId}/request/{request.id}/scope-tab">{request.id}</a>
        </td>
        <td>
          {request.name}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
