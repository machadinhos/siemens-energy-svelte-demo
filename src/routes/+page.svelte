<script lang="ts">
  import { modal } from '$lib/state';
  import { TestModal } from '$lib/components/modals';
  import type { PageProps } from './$types';

  const openModal = (): void => {
    modal.open(TestModal, { extraParams: { text: 'abc' } });
  };

  let { data }: PageProps = $props();
</script>

<button class="block cursor-pointer" onclick={openModal} type="button">test modal</button>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {#each data.projects as project (project.id)}
      <tr>
        <td>
          <a href="/project/{project.id}">{project.id}</a>
        </td>
        <td>
          {project.name}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
