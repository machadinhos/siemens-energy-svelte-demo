import type { LayoutServerLoad } from './$types';
import { projectsService } from '$lib/services/projects';

export const load: LayoutServerLoad = async () => {
  // Call your service
  const resultt = await projectsService.getAllProjects();
  if (!resultt.isSuccess) {
    // eslint-disable-next-line no-console
    console.log('Failed to load projects');
  }

  //dummy sample projects list:
  const result = {
    isSuccess: true,
    data: [
      { id: 1, name: 'Project Alpha' },
      { id: 2, name: 'Project Beta' },
    ],
    errorMessage: null,
  };

  // Return the data to the UI (+layout.svelte)
  return {
    projects: result.data,
  };
};
