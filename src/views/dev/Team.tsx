import '@/assets/scss/pages/example.scss';

import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

const colorType = {};

export default function Team() {
  const [guageOption, setOptions2] = useState({
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 10,
        itemStyle: {
          color: '#FFAB91',
        },
        progress: {
          show: true,
          width: 30,
        },
        pointer: {
          show: false,
        },
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
        data: [
          {
            value: 50,
          },
        ],
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        itemStyle: {
          // color: '#FD7347',
          color: 'red',
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 50,
          },
        ],
      },
    ],
  });

  return (
    <div className="flex">
      <div style={{ flex: '1' }}>
        <h2 className="component__h2">현재 팀장님 분노 게이지</h2>
        <ul className="component__inform">
          <li>오늘의 팀장님 화남 정도를 시각화한 화면입니다.</li>
          <li>향지의 주관적인 생각으로 실제와 틀릴 수 있습니다.</li>
        </ul>
        <div style={{ width: '500px', height: '500px' }}>
          <ReactECharts
            option={guageOption}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'svg', width: 500, height: 500 }}
          />
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <h2 className="component__h2">오늘의 팀장님 화 게이지 기록</h2>
        {/* <ul className="component__inform">
          <li>오늘의 팀장님 화남 정도를 시각화한 화면입니다.</li>
          <li>향지의 주관적인 생각으로 실제와 틀릴 수 있습니다.</li>
        </ul> */}
        <div
          className="mt-40"
          style={{ width: '500px', height: '500px', fontSize: '2rem' }}
        >
          추가 예정입니다
          {/* <ReactECharts
            option={options2}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'svg', width: 500, height: 500 }}
          /> */}
        </div>
      </div>
    </div>
  );
}
