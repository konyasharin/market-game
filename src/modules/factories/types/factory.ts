import { FactoryType } from '../types';

import { Id } from '@/shared';

export interface Factory {
  id: Id;
  type: FactoryType;
  basePrice: number;
  baseOutput: number;
}
