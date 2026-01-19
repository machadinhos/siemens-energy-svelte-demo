import { apiFetch, type ServiceResult } from './api';
import type { Project, ProjectCreate } from '../types/projects';
import type { CountryDto } from '../types/masterData';

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

  createProject(project: ProjectCreate): Promise<ServiceResult<Project>> {
    return apiFetch<Project>('Projects/Create', 'POST', project);
  },

  deleteProject(id: number): Promise<ServiceResult<null>> {
    return apiFetch<null>('Projects/DeleteProjectByIdAsync', 'POST', id);
  },
};
