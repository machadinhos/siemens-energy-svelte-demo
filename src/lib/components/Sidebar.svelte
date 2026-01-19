<script lang="ts">
  import { page } from '$app/stores';

  const isAdmin = true; // TODO: Use your actual auth logic here

  const menuItems = [
    { label: 'Home', path: '/', icon: 'home', visible: true },
    { label: 'Calculate', path: '/projects/calculation', icon: 'calculate', visible: isAdmin },
    { label: 'Contract', path: '/projects/asSoldRequest', icon: 'description', visible: isAdmin },
    { label: 'Factory', path: '/projects/overview', icon: 'factory', visible: true },
    { label: 'Finance', path: '/requests/statistics', icon: 'analytics', visible: isAdmin },
    { label: 'Settings', path: '/requests/administration', icon: 'settings', visible: isAdmin },
  ];
</script>

<nav class="group flex h-full w-20 flex-col items-center bg-slate-900 py-6 text-white transition-all hover:w-64">
  <!-- Logo area -->
  <div class="mb-10 px-4">
    <div class="bg-primary-500 flex h-10 w-10 items-center justify-center rounded font-bold">R4C</div>
  </div>

  <div class="flex w-full flex-1 flex-col gap-4 px-2">
    {#each menuItems.filter((m) => m.visible) as item}
      <a
        href={item.path}
        class="flex h-12 items-center gap-4 rounded-lg px-3 transition-colors
                {$page.url.pathname === item.path
          ? 'bg-primary-600 text-white'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'}"
      >
        <i class="material-icons">{item.icon}</i>
        <span class="hidden text-sm font-medium whitespace-nowrap group-hover:block">{item.label}</span>
      </a>
    {/each}
  </div>
</nav>
