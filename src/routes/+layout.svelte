<script lang="ts">
  import './layout.css';
  import { GlobalModal, ToastGroup } from '$lib/components/global';

  let { children } = $props();
</script>

<GlobalModal />
<ToastGroup />

<div class="h-screen w-screen p-4">
  {@render children()}
</div>
