import { FC } from 'react';

import {
  calculateCompaniesFullInfo,
  CompaniesChart,
  generateCompaniesBaseData,
} from '@/modules/companies';

import { COMPANIES_CONFIG, FACTORIES_CONFIG } from '../configs';

const App: FC = () => {
  return (
    <div>
      <CompaniesChart
        data={calculateCompaniesFullInfo(
          generateCompaniesBaseData(COMPANIES_CONFIG),
          FACTORIES_CONFIG,
        )}
      />
    </div>
  );
};

export default App;
