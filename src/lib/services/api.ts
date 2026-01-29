import { browser } from '$app/environment';

const BASE_URL = 'https://localhost:7289/api';

export async function apiFetch<T>(
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: unknown,
): Promise<T> {
  try {
    if (!browser) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }

    const response = await fetch(`${BASE_URL}/${path}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    const errorText = await response.text();
    throw Error(errorText);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);

    throw Error(`${message}`);
  }
}
