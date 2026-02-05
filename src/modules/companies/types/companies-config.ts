import { Company } from './company';
import { CompanyName } from './company-name';

export interface CompaniesConfig {
  baseData: Pick<Company, 'factories'>;
  companies: Record<CompanyName, Pick<Company, 'id'>>;
}
