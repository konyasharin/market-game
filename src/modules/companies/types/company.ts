import { FactoryType } from '@/modules/factories';

import { Id } from '@/shared';

export interface Company {
  id: Id;
  name: string;
  factories: Record<FactoryType, number>;
}
