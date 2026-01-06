<script lang="ts">
  import type { PageProps } from './$types';
  import { onMount } from 'svelte';

  let { data }: PageProps = $props();

  onMount(() => {
    alert('test');
  });
</script>

<p>Id: {data.request.id}</p>
<p>Name: {data.request.name}</p>
