import type { PageServerLoad } from './$types';
import type { Request } from '$types';

export const load: PageServerLoad = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  const requests: Request[] = [
    {
      id: 1,
      name: 'Request 1',
    },
    {
      id: 2,
      name: 'Request 2',
    },
  ];

  return {
    requests,
  };
};
