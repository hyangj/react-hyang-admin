import ReactECharts from 'echarts-for-react';
import React, { useMemo } from 'react';

interface PropsType {
  value: number | string;
}

const GuageChart = ({ value = 0 }: PropsType) => {
  const chartScale = 450;
  console.log('value: ', value);

  const options = useMemo(() => {
    return {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 100,
          splitNumber: 10,
          itemStyle: { color: '#FFAB91' },
          progress: {
            show: true,
            width: 30,
          },
          pointer: { show: false },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            distance: -20,
            color: '#999',
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            offsetCenter: [0, '-15%'],
            fontSize: 60,
            fontWeight: 'bolder',
            formatter: '{value} %',
            color: 'red',
          },
          data: [{ value }],
        },
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 100,
          itemStyle: { color: 'red' },
          progress: {
            show: true,
            width: 8,
          },
          pointer: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          detail: { show: false },
          data: [{ value }],
        },
      ],
    };
  }, [value]);

  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: 'svg', width: chartScale, height: chartScale }}
      className="pt-10"
    />
  );
};

export default React.memo(GuageChart);
