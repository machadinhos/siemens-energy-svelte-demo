<script lang="ts">
  import { modal } from '$lib/state';
  import { TestModal } from '$lib/components/modals';
  import type { PageProps } from './$types';

  const openModal = (): void => {
    modal.open(TestModal, { extraParams: { text: 'abc' } });
  };

  let { data }: PageProps = $props();
</script>

<button
  class="my-2 flex items-center gap-3 rounded-lg bg-white px-4 py-2 text-center align-middle font-sans text-xs font-bold text-black uppercase shadow-md shadow-gray-900/10 transition-all select-none hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  onclick={openModal}
  type="button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    stroke-width="2"
    class="h-4 w-4"
  >
    <path
      d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
    >
    </path>
  </svg>
  Add Project
</button>

<div
  class="relative flex h-auto w-auto flex-col overflow-scroll rounded-lg bg-white bg-clip-border text-gray-700 shadow-md"
>
  <table class="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        <th class="border-b border-slate-300 bg-slate-50 p-4">
          <p class="block text-sm leading-none font-normal text-slate-500">Id</p>
        </th>
        <th class="border-b border-slate-300 bg-slate-50 p-4">
          <p class="block text-sm leading-none font-normal text-slate-500">Name</p>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each data.projects as project (project.id)}
        <tr class="hover:bg-slate-50">
          <td class="border-b border-slate-200 p-4">
            <p class="block text-sm text-slate-800">{project.id}</p>
          </td>
          <td class="border-b border-slate-200 p-4">
            <a href="/project/{project.id}" class="block text-sm font-semibold text-slate-800">
              {project.name}
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
