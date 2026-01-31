<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { projectsService } from '$services';
  import { type ModalInstance } from '$state';

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

<input type="text" bind:value={projectName} />
<button onclick={save} type="button">test</button>
{text}
