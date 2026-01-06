import type { LayoutServerLoad } from './$types';
import type { Project } from '$types';

export const load: LayoutServerLoad = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  const projects: Project[] = [
    {
      id: 1,
      name: 'Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
    },
  ];

  return {
    projects,
  };
};
