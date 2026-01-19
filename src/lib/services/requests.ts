import { apiFetch, type ServiceResult } from './api';
import type { RequestFullFormDto, RequestUpdateDto } from '../types/requests';

export const requestsService = {
  /**
   * Replaces: GetFullRequestByIdAsync
   */
  getFullRequestById(id: number): Promise<ServiceResult<RequestFullFormDto>> {
    return apiFetch<RequestFullFormDto>(`Requests/GetRequestById/${id}`);
  },

  /**
   * Replaces: UpdateRequestAsync
   * Note: Using <null> instead of <void> to satisfy ESLint
   */
  updateRequest(id: number, data: RequestUpdateDto): Promise<ServiceResult<null>> {
    return apiFetch<null>(`Requests/Update/${id}`, 'PUT', data);
  },

  /**
   * Ported Business Logic: GetTermResults
   * This handles the complex math for the Term Tab in the UI
   */
};
