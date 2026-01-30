import type { LayoutServerLoad } from './$types';
import type { Request } from '$lib/types';

export const load: LayoutServerLoad = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  const request: Request = {
    id: parseInt(params.requestId),
    name: `Request ${params.requestId}`,
    scopeTab: {
      isNewInstallation: false,
    },
  };

  return {
    tooltip: '',
    request,
  };
};
