import '@/assets/scss/pages/example.scss';

import ReactECharts from 'echarts-for-react';
import React, { useMemo } from 'react';

interface PropsType {
  xAxis: Array<string>;
  data: Array<number>;
}

const LineChart = ({ xAxis = [], data = [] }: PropsType) => {
  const chartScale = 450;
  const options = useMemo(() => {
    return {
      tooltip: {
        trigger: 'axis',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (params: any) {
          const [item] = params;
          console.log('params: ', params);
          return `${item.marker} ${item.axisValue} : ${item.data}%`;
        },
      },
      xAxis: {
        type: 'category',
        data: xAxis,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        max: 100,
      },
      series: [
        {
          data,
          type: 'line',
          smooth: true,
          color: '#FFAB91',
        },
      ],
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
        },
      ],
    };
  }, [xAxis, data]);

  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: 'svg', width: chartScale * 1.5, height: chartScale }}
    />
  );
};

export default React.memo(LineChart);
