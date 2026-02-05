import { Factory, FactoryType } from '../types';

export type FactoriesConfig = Record<FactoryType, Omit<Factory, 'type'>>;
