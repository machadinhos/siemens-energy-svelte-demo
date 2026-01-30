export type Project = {
  id: number;
  projectID: string;
  name: string;
  status: string;
  country?: {
    name: string;
  };
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
};
