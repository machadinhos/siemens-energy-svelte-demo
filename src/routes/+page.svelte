<script lang="ts">
  import { modal } from '$state';
  import { TestModal } from '$components-modals';
  import { Table, Button } from '$components-ui';
  import type { Project } from '$types';

  let { data } = $props();

  const openModal = (): void => {
    modal.open(TestModal, { extraParams: { text: 'abc' } });
  };
</script>

<Button class="mb-7" onclick={openModal}>Open Modal</Button>

{#snippet projectIdRender(project: Project)}
  <a href="/project/{project.id}">{project.id}</a>
{/snippet}

<Table
  headers={[
    { label: 'Id', snippet: projectIdRender },
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
  ]}
  rows={data.projects}
/>
