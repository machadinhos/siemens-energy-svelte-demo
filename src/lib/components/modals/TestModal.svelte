<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { projectsService } from '$lib/services/projects';
  import { type ModalInstance } from '$lib/state';

  type Params = {
    text: string;
  };

  type Props = {
    modal: ModalInstance<Params>;
  } & Params;

  let { modal, text }: Props = $props();

  let projectName = $state('');

  const save = async (): Promise<void> => {
    await projectsService.createProject(projectName);
    await invalidate('app:projects');
    modal.close();
  };
</script>

<div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
  <div class="sm:flex sm:items-start">
    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <h3 id="dialog-title" class="text-base font-semibold text-white">Create Project</h3>
      <div class="mt-2">
        <p class="text-sm text-gray-400">Insert here the name of the new project.</p>
        <div class="mt-2">
          <input
            type="text"
            bind:value={projectName}
            class="w-full rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            placeholder="Project Name"
          />
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
  <button
    onclick={save}
    type="button"
    class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
    >Save</button
  >
  <button
    onclick={() => modal.close()}
    type="button"
    class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
    >Cancel</button
  >
</div>
