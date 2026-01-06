<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<p>Id: {data.request.id}</p>
<p>Name: {data.request.name}</p>
