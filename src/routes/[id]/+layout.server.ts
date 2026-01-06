// +layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
  // const request = await fetch($"requests/{params.id}");
  // return request;

  await new Promise((resolve) => setTimeout(resolve, 10));

  return {
    request: {
      test: "I'm a test",
      id: params.id,
    },
  };
};
