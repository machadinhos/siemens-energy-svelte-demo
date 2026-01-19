/**
 * Replaces: CountryDto
 */
export type CountryDto = {
  Id: number;
  Name: string;
  RegionPBId: number;
  RegionPBName: string;
  RegionPBAW: string;
  Hz: string;
};

export type FrameAPI = {
  Id: number;
  Name: string;
};

export type MaintenanceConceptFromAPI = {
  FrameName: string;
  FrameVersion: string;
  FiringTemp: number;
  // Add other fields from your C# class as needed
};

export type Pattern = {
  Id: number;
  Name: string;
  // ... rest of Pattern properties
};

export type InputFieldOptionDto = {
  id: number;
  name: string;
};
