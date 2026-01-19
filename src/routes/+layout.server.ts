import type { LayoutServerLoad } from './$types';
import { projectsService } from '$lib/services/projects';

export const load: LayoutServerLoad = async () => {
  const result = await projectsService.getAllProjects();
  if (!result.isSuccess) {
    console.log('Failed to load projects');
  }

  return {
    projects: result.data,
  };
};
