import { FC } from 'react';
import { BarChart } from '@mantine/charts';

import { CompanyFullInfo } from '../types';

interface CompaniesChartProps {
  data: CompanyFullInfo[];
}

export const CompaniesChart: FC<CompaniesChartProps> = props => {
  return (
    <BarChart
      className={'mt-16 mx-auto'}
      h={300}
      w={'95%'}
      data={props.data}
      dataKey={'name'}
      orientation={'vertical'}
      yAxisProps={{ width: 80 }}
      barProps={{ radius: 10 }}
      series={[{ name: 'price', color: 'blue.6' }]}
    />
  );
};
