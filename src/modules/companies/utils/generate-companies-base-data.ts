import { CompaniesConfig, Company, CompanyName } from '../types';

export const generateCompaniesBaseData = (config: CompaniesConfig) => {
  const companies: Company[] = [];
  Object.keys(config.companies).forEach(name => {
    companies.push({
      ...config.companies[name as CompanyName],
      ...config.baseData,
      name,
    });
  });

  return companies;
};
