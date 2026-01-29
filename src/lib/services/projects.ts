import { apiFetch } from './api';
import type { Project } from '../types/projects';

export const projectsService = {
  getAllProjects(): Promise<Project[]> {
    return apiFetch<Project[]>('Projects/GetAllProjects');
  },

  async createProject(projectName: string): Promise<Project> {
    return await apiFetch<Project>('Projects/Create', 'POST', {
      id: 0,
      name: projectName,
      customerLegalname: null,
      salesforceNumber: null,
      psp: null,
      pkz: null,
      mendix: null,
      countryId: 19308,
      regionPB: 'REU',
      regionAW: 'W',
      hz: '50',
      isTest: false,
      currentUser: 'R4C.test@siemens-energy.com',
      userIds: [205],
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

  deleteProject(id: number): Promise<void> {
    return apiFetch<never>('Projects/DeleteProjectByIdAsync', 'POST', id);
  },
};
