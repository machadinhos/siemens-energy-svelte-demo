import type { CountryDto } from './masterData.ts';

/**
 * The "Master" Project Shape
 * This covers ProjectDto, ProjectForR4CDto, and ProjectForAsSoldChecklistDto
 */
export type Project = {
  id: number;
  projectID: string; // The string identifier (e.g. P-100)
  name: string;
  status: string;
  country?: CountryDto;
  regionPB: string;
  regionAW: string;
  hz: string;
  isTest: boolean;
  customerLegalname?: string;
  salesforceNumber?: string;
  psp?: string;
  pkz?: string;
  mendix?: string;
  dateLastStatusChange?: string; // DateTime ISO string
  userIds: number[];
  requestsCount: number;
  // For Checklist/Request Header scenarios
};

/**
 * Project Creation / Detailed Edit
 * Replaces: ProjectCreateDto
 * We use "&" to add the specific fields needed only during creation
 */
export type ProjectCreate = Omit<Project, 'country' | 'id'> & {
  id?: number;
  countryId: number; // Form uses ID, not the whole object
  countryName?: string;
  currentUser?: string;
  statusId: number;
  statusName: string;
  frameClassDropdownId: number;
  frameClassDropdown: string;
  firstCalcNeededBy: string; // Date string
  firstCalcNeededForDropdownId: number;
  firstCalcNeededForDropdown: string;
  baseUrl?: string;
  projectUrlLink?: string;
};

/**
 * Replaces: OpenTaskDto
 * This is a unique "View" combining Project and Request info
 */
export type OpenTask = {
  projectID: number;
  projectIdentifier: string;
  projectName: string;
  country: string;
  requestId: number;
  requestIdentifier: string;
  requestStatus: string;
  dueDate: string | null;
  projectItemType: number; // Enum value
  assignedUsersIds: number[];
};

/**
 * Replaces: ProjectStatusEditDto
 * In Svelte, we usually just use Partial<Project>, but if your
 * API specifically expects this shape:
 */
export type ProjectStatusUpdate = {
  projectId: number;
  statusId: number;
  statusName: string;
  projectName: string;
};
