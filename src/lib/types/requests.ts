export type Request = {
  id: number;
  name: string;
  scopeTab: {
    isNewInstallation: boolean;
  };
};

import type { Project } from './projects.ts';

/**
 * Replaces: RequestFullFormDto
 */
export type RequestFullFormDto = {
  RequestID: number;
  RequestIdentifier: string;
  Status: string;
  DueDate: string | null;
  RequestGoal: number | null;
  RequestGoal_Text: string | null;
  Project: Project;

  // Nested Tabs
  ScopeTabDataDto: ScopeTabDataDto;
  GtTabDataDto: GtTabDataDto;
};

/**
 * Replaces: ScopeTabDataDto
 */
export type ScopeTabDataDto = {
  // Plant & Contract Configuration
  B_Scope_001_NumBlocksDropdownId: number | null;
  B_Scope_001_NumBlocksDropdown: string | null;
  B_Scope_002_BlockConfigDropdownId: number | null;
  B_Scope_002_BlockConfigDropdown: string | null;
  B_Scope_003_ServiceProgramDropdownId: number | null;
  B_Scope_003_ServiceProgramDropdown: string | null;
  B_Scope_004_HasNewInstallation: boolean;

  // Number of Machines
  B_Scope_005_NumberOfGTs_DropdownId: number | null;
  B_Scope_005_NumberOfGTs_Dropdown: string | null;
  AllGTsSame: boolean;
  B_Scope_006_NumberOfSTs_DropdownId: number | null;
  B_Scope_006_NumberOfSTs_Dropdown: string | null;
  B_Scope_007_NumberOfGtGens_DropdownId: number | null;
  B_Scope_007_NumberOfGtGens_Dropdown: string | null;
  B_Scope_008_NumberOfStGens_DropdownId: number | null;
  B_Scope_008_NumberOfStGens_Dropdown: string | null;

  // Machine Types & Versions
  B_Scope_009_GtTypeDropdownId: string | null;
  B_Scope_009_GtTypeDropdown: string | null;
  B_Scope_010_StTypeDropdownId: string | null;
  B_Scope_010_StTypeDropdown: string | null;
  B_Scope_011_GtGenTypeDropdownId: string | null;
  B_Scope_011_GtGenTypeDropdown: string | null;
  B_Scope_012_StGenTypeDropdownId: string | null;
  B_Scope_012_StGenTypeDropdown: string | null;
  B_Scope_013_GtVersionDropdownId: string | null;
  B_Scope_013_GtVersionDropdown: string | null;

  // Scope Switches
  B_Scope_014_HasDigitalServices: boolean;
  B_Scope_015_HasICElectrical: boolean;
  B_Scope_016_HasSpares: boolean;
  B_Scope_017_HasHRSG: boolean;
  B_Scope_018_HasRCIE: boolean;
  B_Scope_019_HasMU: boolean;
  B_Scope_020_HasExtension: boolean;
  B_Scope_021_HasResidentEngineer: boolean;
  B_Scope_022_HasCoverage: boolean;
  B_Scope_023_HasExtendedWarranties: boolean;
  B_Scope_024_HasFieldService: boolean;
  B_Scope_025_HasCustomerTraining: boolean;

  // Contractual Basics
  B_Scope_026_ProposalTypeDropdownId: number | null;
  B_Scope_026_ProposalTypeDropdown: string | null;
  B_Scope_027_BusinessModelDropdownId: number | null;
  B_Scope_027_BusinessModelDropdown: string | null;
  B_Scope_028_ProjectCurrencyDropdownId: number | null;
  B_Scope_028_ProjectCurrencyDropdown: string | null;
  B_Scope_029_SourcingCurrencyDropdownId: number | null;
  B_Scope_029_SourcingCurrencyDropdown: string | null;
  B_Scope_030_ContractCurrencyDropdownId: number | null;
  B_Scope_030_ContractCurrencyDropdown: string | null;
  B_Scope_031_ImplementationDropdownId: number | null;
  B_Scope_031_ImplementationDropdown: string | null;

  // Notes & Warranty
  B_Scope_032_HighLevelNotesInput: string | null;
  B_Scope_033_NewUnitWTYDropdownId: number | null;
  B_Scope_033_NewUnitWTYDropdown: string | null;

  // DAS/PDC
  B_Scope_034_HasDAS_PDC: boolean;
  B_Scope_035_Consider_DAS_PDC_DropdownId: number | null;
  B_Scope_035_Consider_DAS_PDC_Dropdown: string | null;
  B_Scope_036_Hardware_Upgrade_DropdownId: number | null;
  B_Scope_036_Hardware_Upgrade_Dropdown: string | null;

  // Nested GT Configs (Flat representation)
  B_Scope_038_Gt2TypeDropdownId: string | null;
  B_Scope_038_Gt2TypeDropdown: string | null;
  B_Scope_039_Gt2VersionDropdownId: string | null;
  B_Scope_039_Gt2VersionDropdown: string | null;
  B_Scope_040_Gt3TypeDropdownId: string | null;
  B_Scope_040_Gt3TypeDropdown: string | null;
  B_Scope_041_Gt3VersionDropdownId: string | null;
  B_Scope_041_Gt3VersionDropdown: string | null;
  B_Scope_042_Gt4TypeDropdownId: string | null;
  B_Scope_042_Gt4TypeDropdown: string | null;
  B_Scope_043_Gt4VersionDropdownId: string | null;
  B_Scope_043_Gt4VersionDropdown: string | null;
  B_Scope_044_Gt5TypeDropdownId: string | null;
  B_Scope_044_Gt5TypeDropdown: string | null;
  B_Scope_045_Gt5VersionDropdownId: string | null;
  B_Scope_045_Gt5VersionDropdown: string | null;
  B_Scope_046_Gt6TypeDropdownId: string | null;
  B_Scope_046_Gt6TypeDropdown: string | null;
  B_Scope_047_Gt6VersionDropdownId: string | null;
  B_Scope_047_Gt6VersionDropdown: string | null;
  B_Scope_048_Gt7TypeDropdownId: string | null;
  B_Scope_048_Gt7TypeDropdown: string | null;
  B_Scope_049_Gt7VersionDropdownId: string | null;
  B_Scope_049_Gt7VersionDropdown: string | null;
  B_Scope_050_Gt8TypeDropdownId: string | null;
  B_Scope_050_Gt8TypeDropdown: string | null;
  B_Scope_051_Gt8VersionDropdownId: string | null;
  B_Scope_051_Gt8VersionDropdown: string | null;
};

/**
 * Replaces: GtTabDataDto
 */
export type GtTabDataDto = {
  // Shared GT Properties
  C_GT_001_HasPowerAugmentation: boolean;
  C_GT_002_HasUsedParts: boolean;
  C_GT_003_HasPartsOptimization: boolean;
  C_GT_004_NumberOfGTsDropdownId: number | null;
  C_GT_004_NumberOfGTsDropdown: string | null;
  C_GT_010_FuelModeDropdownId: number | null;
  C_GT_010_FuelModeDropdown: string | null;
  C_GT_011_H2CoFiringDropdownId: number | null;
  C_GT_011_H2CoFiringDropdown: string | null;
  C_GT_012_H2ReadinessDropdownId: number | null;
  C_GT_012_H2ReadinessDropdown: string | null;
  C_GT_013_PrimaryFuelTypeDropdownId: number | null;
  C_GT_013_PrimaryFuelTypeDropdown: string | null;
  C_GT_014_SecondaryFuelTypeDropdownId: number | null;
  C_GT_014_SecondaryFuelTypeDropdown: string | null;
  C_GT_022_WarrantyTypeDropdownId: number | null;
  C_GT_022_WarrantyTypeDropdown: string | null;
  C_GT_023_SeamlessDropdownId: number | null;
  C_GT_023_SeamlessDropdown: string | null;
  C_GT_024_PowerAugTypeDropdownId: number | null;
  C_GT_024_PowerAugTypeDropdown: string | null;
  C_GT_025_HasUsedPartsStrategy: boolean;
  C_GT_026_CustomsDutyDropdownId: number | null;
  C_GT_026_CustomsDutyDropdown: string | null;
  C_GT_027_ContractWordingDropdownId: number | null;
  C_GT_027_ContractWordingDropdown: string | null;
  C_GT_028_HasPartsStagger: boolean;
  C_GT_029_HasPartsRotation: boolean;
  C_GT_030_HasPartsOptimization: boolean;
  C_GT_031_HasRevolvingScrap: boolean;
  C_GT_032_GearboxDropdownId: number | null;
  C_GT_032_GearboxDropdown: string | null;
  C_GT_033_ManufacturerDropdownId: number | null;
  C_GT_033_ManufacturerDropdown: string | null;
  C_GT_034_InsulationDesignDropdownId: number | null;
  C_GT_034_InsulationDesignDropdown: string | null;
  C_GT_035_UpgradeInsulationDropdownId: number | null;
  C_GT_035_UpgradeInsulationDropdown: string | null;
  C_GT_036_CombustionSystemDropdownId: number | null;
  C_GT_036_CombustionSystemDropdown: string | null;
  C_GT_037_NotesInput: string | null;
  C_GT_038_HasFL2FL: boolean;
  C_GT_039_FuelSpecDropdownId: number | null;
  C_GT_039_FuelSpecDropdown: string | null;
  C_GT_052_HasTurbineBVRS: boolean;
  C_GT_053_HasCompressorBV: boolean;
  C_GT_055_HasCHSMHS: boolean;
  C_GT_056_HasBurner: boolean;
  C_GT_057_HasCombustionSystem: boolean;
  C_GT_058_EarlyDeliveryOfProgramParts_DropdownId: number | null;
  C_GT_058_EarlyDeliveryOfProgramParts_Dropdown: string | null;
  C_GT_059_EarlyDelivery_SpecifyScope_Input: string | null;
  C_GT_060_HasDerating: boolean;
  C_GT_061_HasOverfiring: boolean;
  C_GT_040_HasPossibilityOfStartLimitation: boolean;
  C_GT_041_PossibilityOfStartLimitationInput: string | null;
  C_GT_062_SingleDoubleTurnDropdownId: number | null;
  C_GT_062_SingleDoubleTurnDropdown: string | null;
  C_GT_063_Blade1DesignDropdownId: number | null;
  C_GT_063_Blade1DesignDropdown: string | null;
  C_GT_064_ACEDropdownId: number | null;
  C_GT_064_ACEDropdown: string | null;
  C_GT_065_PCSDropdownId: number | null;
  C_GT_065_PCSDropdown: string | null;

  // GT Config #1
  Gt1_Frame: string | null;
  Gt1_Version: string | null;
  C_GT_005_TitStandardDropdownId: string | null;
  C_GT_005_TitStandardDropdown: string | null;
  C_GT_006_HasManualTit: boolean;
  C_GT_007_TitManualInput: string | null;
  C_GT_008_ExWorksDatesDropdown: string | null;
  C_GT_009_MachineNumbersInput: string | null;
  C_GT_015_MaintConceptManualInput: string | null;
  C_GT_016_MaintConceptDropdownId: string | null;
  C_GT_016_MaintConceptDropdown: string | null;
  C_GT_017_OperationModelDropdownId: number | null;
  C_GT_017_OperationModelDropdown: string | null;
  C_GT_018_MajorIntervalEOH_Input: string | null;
  C_GT_019_MajorIntervalES_Input: string | null;
  C_GT_020_MinorIntervalEOH_Input: string | null;
  C_GT_021_MinorIntervalES_Input: string | null;

  // GT Config #2
  Gt2_Frame: string | null;
  Gt2_Version: string | null;
  C_GT_070_Gt2TitStandardDropdownId: string | null;
  C_GT_070_Gt2TitStandardDropdown: string | null;
  C_GT_071_Gt2HasManualTit: boolean;
  C_GT_072_Gt2TitManualInput: string | null;
  C_GT_073_Gt2MaintConceptDropdownId: string | null;
  C_GT_073_Gt2MaintConceptDropdown: string | null;
  C_GT_074_Gt2ExWorksDatesDropdown: string | null;
  C_GT_075_Gt2MachineNumbersInput: string | null;
  C_GT_076_Gt2OperationModelDropdownId: number | null;
  C_GT_076_Gt2OperationModelDropdown: string | null;
  C_GT_077_Gt2MajorIntervalEOH_Input: string | null;
  C_GT_078_Gt2MajorIntervalES_Input: string | null;
  C_GT_079_Gt2MinorIntervalEOH_Input: string | null;
  C_GT_080_Gt2MinorIntervalES_Input: string | null;

  // GT Config #3
  Gt3_Frame: string | null;
  Gt3_Version: string | null;
  C_GT_081_Gt3TitStandardDropdownId: string | null;
  C_GT_081_Gt3TitStandardDropdown: string | null;
  C_GT_082_Gt3HasManualTit: boolean;
  C_GT_083_Gt3TitManualInput: string | null;
  C_GT_084_Gt3MaintConceptDropdownId: string | null;
  C_GT_084_Gt3MaintConceptDropdown: string | null;
  C_GT_085_Gt3ExWorksDatesDropdown: string | null;
  C_GT_086_Gt3MachineNumbersInput: string | null;
  C_GT_087_Gt3OperationModelDropdownId: number | null;
  C_GT_087_Gt3OperationModelDropdown: string | null;
  C_GT_088_Gt3MajorIntervalEOH_Input: string | null;
  C_GT_089_Gt3MajorIntervalES_Input: string | null;
  C_GT_090_Gt3MinorIntervalEOH_Input: string | null;
  C_GT_091_Gt3MinorIntervalES_Input: string | null;

  // GT Config #4
  Gt4_Frame: string | null;
  Gt4_Version: string | null;
  C_GT_092_Gt4TitStandardDropdownId: string | null;
  C_GT_092_Gt4TitStandardDropdown: string | null;
  C_GT_093_Gt4HasManualTit: boolean;
  C_GT_094_Gt4TitManualInput: string | null;
  C_GT_095_Gt4MaintConceptDropdownId: string | null;
  C_GT_095_Gt4MaintConceptDropdown: string | null;
  C_GT_096_Gt4ExWorksDatesDropdown: string | null;
  C_GT_097_Gt4MachineNumbersInput: string | null;
  C_GT_098_Gt4OperationModelDropdownId: number | null;
  C_GT_098_Gt4OperationModelDropdown: string | null;
  C_GT_099_Gt4MajorIntervalEOH_Input: string | null;
  C_GT_100_Gt4MajorIntervalES_Input: string | null;
  C_GT_101_Gt4MinorIntervalEOH_Input: string | null;
  C_GT_102_Gt4MinorIntervalES_Input: string | null;

  // GT Config #5
  Gt5_Frame: string | null;
  Gt5_Version: string | null;
  C_GT_103_Gt5TitStandardDropdownId: string | null;
  C_GT_103_Gt5TitStandardDropdown: string | null;
  C_GT_104_Gt5HasManualTit: boolean;
  C_GT_105_Gt5TitManualInput: string | null;
  C_GT_106_Gt5MaintConceptDropdownId: string | null;
  C_GT_106_Gt5MaintConceptDropdown: string | null;
  C_GT_107_Gt5ExWorksDatesDropdown: string | null;
  C_GT_108_Gt5MachineNumbersInput: string | null;
  C_GT_109_Gt5OperationModelDropdownId: number | null;
  C_GT_109_Gt5OperationModelDropdown: string | null;
  C_GT_110_Gt5MajorIntervalEOH_Input: string | null;
  C_GT_111_Gt5MajorIntervalES_Input: string | null;
  C_GT_112_Gt5MinorIntervalEOH_Input: string | null;
  C_GT_113_Gt5MinorIntervalES_Input: string | null;

  // GT Config #6
  Gt6_Frame: string | null;
  Gt6_Version: string | null;
  C_GT_114_Gt6TitStandardDropdownId: string | null;
  C_GT_114_Gt6TitStandardDropdown: string | null;
  C_GT_115_Gt6HasManualTit: boolean;
  C_GT_116_Gt6TitManualInput: string | null;
  C_GT_117_Gt6MaintConceptDropdownId: string | null;
  C_GT_117_Gt6MaintConceptDropdown: string | null;
  C_GT_118_Gt6ExWorksDatesDropdown: string | null;
  C_GT_119_Gt6MachineNumbersInput: string | null;
  C_GT_120_Gt6OperationModelDropdownId: number | null;
  C_GT_120_Gt6OperationModelDropdown: string | null;
  C_GT_121_Gt6MajorIntervalEOH_Input: string | null;
  C_GT_122_Gt6MajorIntervalES_Input: string | null;
  C_GT_123_Gt6MinorIntervalEOH_Input: string | null;
  C_GT_124_Gt6MinorIntervalES_Input: string | null;

  // GT Config #7
  Gt7_Frame: string | null;
  Gt7_Version: string | null;
  C_GT_125_Gt7TitStandardDropdownId: string | null;
  C_GT_125_Gt7TitStandardDropdown: string | null;
  C_GT_126_Gt7HasManualTit: boolean;
  C_GT_127_Gt7TitManualInput: string | null;
  C_GT_128_Gt7MaintConceptDropdownId: string | null;
  C_GT_128_Gt7MaintConceptDropdown: string | null;
  C_GT_129_Gt7ExWorksDatesDropdown: string | null;
  C_GT_130_Gt7MachineNumbersInput: string | null;
  C_GT_131_Gt7OperationModelDropdownId: number | null;
  C_GT_131_Gt7OperationModelDropdown: string | null;
  C_GT_132_Gt7MajorIntervalEOH_Input: string | null;
  C_GT_133_Gt7MajorIntervalES_Input: string | null;
  C_GT_134_Gt7MinorIntervalEOH_Input: string | null;
  C_GT_135_Gt7MinorIntervalES_Input: string | null;

  // GT Config #8
  Gt8_Frame: string | null;
  Gt8_Version: string | null;
  C_GT_136_Gt8TitStandardDropdownId: string | null;
  C_GT_136_Gt8TitStandardDropdown: string | null;
  C_GT_137_Gt8HasManualTit: boolean;
  C_GT_138_Gt8TitManualInput: string | null;
  C_GT_139_Gt8MaintConceptDropdownId: string | null;
  C_GT_139_Gt8MaintConceptDropdown: string | null;
  C_GT_140_Gt8ExWorksDatesDropdown: string | null;
  C_GT_141_Gt8MachineNumbersInput: string | null;
  C_GT_142_Gt8OperationModelDropdownId: number | null;
  C_GT_142_Gt8OperationModelDropdown: string | null;
  C_GT_143_Gt8MajorIntervalEOH_Input: string | null;
  C_GT_144_Gt8MajorIntervalES_Input: string | null;
  C_GT_145_Gt8MinorIntervalEOH_Input: string | null;
  C_GT_146_Gt8MinorIntervalES_Input: string | null;
};

/**
 * Update DTO using Partial Utility
 * Replaces: RequestUpdateDto
 */
export type RequestUpdateDto = Partial<{
  Status: string;
  DueDate: string | null;
  RequestGoal: number | null;
  RequestGoal_Text: string | null;
  ScopeTabDataDto: Partial<ScopeTabDataDto>;
  // ... remaining tab partials
}>;

// Tab placeholders
