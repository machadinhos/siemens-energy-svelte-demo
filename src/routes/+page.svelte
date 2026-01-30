<script lang="ts">
  import { modal } from '$lib/state';
  import { TestModal } from '$lib/components/modals';
  import type { PageProps } from './$types';
  import Table from '$lib/components/Table.svelte';
  import type { Project } from '$types';
  import Button from '$lib/components/Button.svelte';

  let { data }: PageProps = $props();

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
