import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 10));

  return {
    request: {
      id: params.requestId,
      name: `Reuqest ${params.requestId}`,
    },
  };
};
