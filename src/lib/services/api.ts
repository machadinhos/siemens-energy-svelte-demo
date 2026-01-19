export type ServiceResult<T> =
  | { isSuccess: true; data: T; errorMessage: null }
  | { isSuccess: false; data: null; errorMessage: string };

const BASE_URL = 'https://r4c.siemens-energy.cloud/api'; // Adjust based on your environment

export async function apiFetch<T>(
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: unknown,
): Promise<ServiceResult<T>> {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
      const data = await response.json();
      return { isSuccess: true, data, errorMessage: null };
    }

    const errorText = await response.text();
    return { isSuccess: false, data: null, errorMessage: errorText || response.statusText };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);

    return {
      isSuccess: false,
      data: null,
      errorMessage: message,
    };
  }
}
