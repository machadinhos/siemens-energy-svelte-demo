import { apiFetch, type ServiceResult } from './api';
import type { CountryDto } from '../types/masterData';
import type { Project } from '../types/projects';

let countriesCache: CountryDto[] | null = null;

export const projectsService = {
  async getCountries(): Promise<ServiceResult<CountryDto[]>> {
    if (countriesCache) return { isSuccess: true, data: countriesCache, errorMessage: null };

    const res = await apiFetch<CountryDto[]>('Projects/GetCountries');
    if (res.isSuccess) countriesCache = res.data;
    return res;
  },

  getAllProjects(): Promise<ServiceResult<Project[]>> {
    return apiFetch<Project[]>('Projects/GetAllProjects');
  },

  getProjectById(id: number): Promise<ServiceResult<Project>> {
    return apiFetch<Project>(`Projects/Details/${id}`);
  },

  async createProject(projectName: string): Promise<ServiceResult<Project>> {
    return await apiFetch<Project>('Projects/Create', 'POST', {
      id: 0,
      name: projectName,
      customerLegalname: null,
      salesforceNumber: null,
      psp: null,
      pkz: null,
      mendix: null,
      countryId: 780,
      regionPB: 'REU',
      regionAW: 'W',
      hz: '50',
      isTest: false,
      currentUser: 'R4C.test@siemens-energy.com',
      userIds: [166],
      statusId: 0,
      statusName: '',
      countryName: null,
      baseUrl: 'https://localhost:7289/projects/details',
      projectUrlLink: null,
      frameClassDropdownId: 0,
      frameClassDropdown: 'Select...',
      firstCalcNeededBy: '2026-02-18',
      firstCalcNeededForDropdownId: 0,
      firstCalcNeededForDropdown: 'Select...',
    });
  },

  deleteProject(id: number): Promise<ServiceResult<null>> {
    return apiFetch<null>('Projects/DeleteProjectByIdAsync', 'POST', id);
  },
};
