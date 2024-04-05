import Icon_Antd from '@/assets/images/icon-antd.png';
import Icon_Echarts from '@/assets/images/icon-echarts.png';
import Icon_React from '@/assets/images/icon-react.png';
import Icon_Tailwind from '@/assets/images/icon-tailwind.png';
import Icon_Zustand from '@/assets/images/icon-zustand.jpeg';
import '@/assets/scss/pages/example.scss';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const list = [
  {
    title: 'React.js',
    image: Icon_React,
    description: 'https://react.dev',
  },
  {
    title: 'Tailwind CSS',
    image: Icon_Tailwind,
    description: 'https://tailwindcss.com',
  },
  { title: 'Ant Design', image: Icon_Antd, description: 'https://ant.design' },
  {
    title: 'zustand',
    image: Icon_Zustand,
    description: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  {
    title: 'echarts',
    image: Icon_Echarts,
    description: 'https://echarts.apache.org/en/index.html',
  },
];
export default function Used() {
  return (
    <>
      <h1 className="component__h1">Guide</h1>
      <h2 className="component__h2"> Used </h2>

      <div className="flex flex-wrap gap-10">
        {list.map((item, index) => (
          <Card
            key={index}
            hoverable
            className="w-[20rem]"
            cover={
              <img className="h-[15rem]" alt={`${item.title} Card`} src={item.image} />
            }
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
    </>
  );
}
