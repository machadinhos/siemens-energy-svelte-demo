<script lang="ts">
  import { user } from '$lib/state/user.svelte';
  import CustomSelect from './CustomSelect.svelte';

  let { onToggleSidebar } = $props();
  let showFeedback = $state(false);

  // Derived logic for display
  const currentUserName = 'John Doe'; // Replace with real auth state
  const roleOptions = [
    { Text: 'Admin', Value: 'Admin' },
    { Text: 'User', Value: 'User' },
    { Text: 'Reader', Value: 'Reader' },
  ];
</script>

<header
  class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white/80 px-6 shadow-sm backdrop-blur-md"
>
  <div class="flex items-center gap-4">
    <button onclick={onToggleSidebar} class="hover:text-primary-600 text-gray-500">
      <i class="material-icons">menu</i>
    </button>
    <h1 class="text-lg font-bold text-slate-800">Request for Calculation</h1>
    <span class="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 uppercase">Production</span>
  </div>

  <div class="flex items-center gap-6">
    <!-- Role Switcher -->
    <div class="w-48">
      <CustomSelect label="" options={roleOptions} bind:value={user.value} />
    </div>

    <!-- Feedback Button -->
    <button
      onclick={() => (showFeedback = true)}
      class="hover:text-primary-600 flex flex-col items-center text-gray-500"
    >
      <i class="material-icons">mail</i>
      <span class="text-[10px]">Feedback</span>
    </button>

    <!-- Profile -->
    <div class="flex items-center gap-3 border-l pl-6">
      <div class="text-right">
        <p class="text-xs font-bold text-slate-900">{currentUserName}</p>
        <p class="text-[10px] text-slate-500">Administrator</p>
      </div>
      <div
        class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-600 ring-2 ring-white"
      >
        JD
      </div>
    </div>
  </div>
</header>

<!-- {#if showFeedback}
  <FeedbackModal close={() => (showFeedback = false)} />
{/if} -->
