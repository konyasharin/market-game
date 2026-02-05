import { FactoriesConfig } from '@/modules/factories';

export const FACTORIES_CONFIG: FactoriesConfig = {
  HIGH_TECHNOLOGY: {
    id: 0,
    basePrice: 1_000_000,
    baseOutput: 10_000,
  },
  AGRICULTURE: {
    id: 1,
    basePrice: 100_000,
    baseOutput: 900,
  },
} as const;
