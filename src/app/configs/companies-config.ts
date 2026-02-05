import { CompaniesConfig } from '@/modules/companies';
import { FACTORY_TYPE } from '@/modules/factories';

export const COMPANIES_CONFIG: CompaniesConfig = {
  baseData: {
    factories: {
      [FACTORY_TYPE.HIGH_TECHNOLOGY]: 0,
      [FACTORY_TYPE.AGRICULTURE]: 1,
    },
  },
  companies: {
    NVIDIA: {
      id: 0,
    },
    GAZPROM: {
      id: 1,
    },
  },
};
