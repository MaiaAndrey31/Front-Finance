import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import { theme } from '../../styles/themes';
import { formatCurrency } from '../../utils/format-currency';

const apiData = [
  {
    _id: '1',
    title: 'Alimentação',
    amount: 30000,
    color: '#f1c40f',
  },
  {
    _id: '2',
    title: 'Streaming',
    amount: 4900,
    color: '#01c40f',
  },
  {
    _id: '3',
    title: 'Compras',
    amount: 15000,
    color: '#661656',
  },
];

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export function CategoriesChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{top: 20}}
      valueFormat={formatCurrency}
      theme={{text: {
        fontFamily: 'Lexend',
        fontSize: 10,
      },
      tooltip: {
        container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,

        }
      }
    }}
    legends={[
        {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -20,
            itemWidth: 120,
            itemHeight: 16,
            itemTextColor: theme.colors.neutral,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 10,
            symbolShape: 'circle'
        }
    ]}
    />
  );
}
