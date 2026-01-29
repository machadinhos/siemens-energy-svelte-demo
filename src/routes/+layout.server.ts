import type { LayoutServerLoad } from './$types';
import { projectsService } from '$lib/services/projects';

export const load: LayoutServerLoad = async ({ depends }) => {
  depends('app:projects');

  return {
    projects: await projectsService.getAllProjects(),
  };
};
