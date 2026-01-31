import type { PageServerLoad } from './$types';
import { projectsService } from '$services';

export const load: PageServerLoad = async ({ depends }) => {
  depends('app:projects');

  return {
    projects: await projectsService.getAllProjects(),
  };
};
