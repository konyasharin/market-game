import { FactoriesConfig, FactoryType } from '@/modules/factories';

import { Company, CompanyAdditionalInfo, CompanyFullInfo } from '../types';

export const calculateCompaniesFullInfo = (
  companies: Company[],
  factoriesConfig: FactoriesConfig,
) => {
  const companiesFull: CompanyFullInfo[] = [];

  companies.forEach((company: Company) => {
    const additionalInfo: CompanyAdditionalInfo = {
      price: Object.keys(company.factories).reduce(
        (sum, name) =>
          (sum + factoriesConfig[name as FactoryType].basePrice) *
          company.factories[name as FactoryType],
        0,
      ),
      budget: Object.keys(company.factories).reduce(
        (sum, name) =>
          (sum + factoriesConfig[name as FactoryType].baseOutput) *
          company.factories[name as FactoryType],
        0,
      ),
    };

    companiesFull.push({
      ...company,
      ...additionalInfo,
    });
  });

  return companiesFull;
};
