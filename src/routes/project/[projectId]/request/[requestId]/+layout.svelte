<script lang="ts">
  import { page } from '$app/state';
  import { Tabs } from '$components-ui';

  let { children, data } = $props();

  let currentPage = $derived(page.url.pathname.split('/').at(-1));
</script>

<p>Id: {data.request.id}</p>
<p>Name: {data.request.name}</p>

<hr class="my-3 border-x border-gray-200" />

<Tabs
  class="mb-3"
  items={[
    { id: 'scope-tab', label: 'Scope', href: './scope-tab' },
    { id: 'gt-tab', label: 'GT', href: './gt-tab' },
    { id: 'digi-tab', label: 'Digi', href: './digi-tab' },
  ]}
  selected={currentPage ?? ''}
/>

{@render children()}
