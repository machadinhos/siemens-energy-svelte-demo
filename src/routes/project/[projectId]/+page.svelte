<script lang="ts">
  import type { PageProps } from './$types';
  import { page } from '$app/state';

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
          <a href="/project/{page.params.projectId}/request/{request.id}">{request.id}</a>
        </td>
        <td>
          {request.name}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
