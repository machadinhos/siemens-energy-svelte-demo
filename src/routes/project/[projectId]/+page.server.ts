import type { PageServerLoad } from './$types';
import type { Request } from '$types';

export const load: PageServerLoad = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  /*
  const requests = awai requestsService.getRequestsByProjectId(params.projectId);
   if (!requests) throw error(404, `Project with id ${params.projectId} was not found`);
  */

  const requests: Request[] = [
    {
      id: 1,
      name: 'Request 1',
      scopeTab: {
        isNewInstallation: true,
      },
    },
    {
      id: 2,
      name: 'Request 2',
      scopeTab: {
        isNewInstallation: false,
      },
    },
  ];

  return {
    requests,
  };
};
