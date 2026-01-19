import { apiFetch, type ServiceResult } from './api';
import type { FrameAPI, MaintenanceConceptFromAPI } from '../types/masterData';

// Cache variable
let conceptsCache: MaintenanceConceptFromAPI[] | null = null;

export const masterDataService = {
  /**
   * Get Frames - Replaces GetFramesAsync
   */
  getFrames(): Promise<ServiceResult<FrameAPI[]>> {
    return apiFetch<FrameAPI[]>('MasterData/GetFrames');
  },

  /**
   * Get Maintenance Concepts - Replaces GetPlasmaMaintenanceConceptsAsync
   * Includes caching logic
   */
  async getMaintenanceConcepts(): Promise<ServiceResult<MaintenanceConceptFromAPI[]>> {
    if (conceptsCache) {
      return { isSuccess: true, data: conceptsCache, errorMessage: null };
    }

    const res = await apiFetch<MaintenanceConceptFromAPI[]>('MasterData/GetPlasmaMaintenanceConcepts');

    if (res.isSuccess) {
      conceptsCache = res.data;
    }

    return res;
  },

  /**
   * Helper to get TiT Options based on selected GT
   * Replaces: GetTiTStandardOptionsFromGTSelected
   */
  async getTiTOptions(frameName: string, frameVersion: string): Promise<string[]> {
    const res = await this.getMaintenanceConcepts();

    if (!res.isSuccess || !res.data) {
      return [];
    }

    return (
      res.data
        .filter((mc) => mc.FrameName === frameName && mc.FrameVersion === frameVersion)
        .map((mc) => mc.FiringTemp.toString())
        // Filter unique values (equivalent to .Distinct() in LINQ)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => Number(a) - Number(b))
    );
  },
};
