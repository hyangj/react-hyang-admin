import Loader from '@/components/CompLoader.tsx';
import routes from '@/routes/index.tsx';
import useAppStore from '@/store/appStore.ts';
import { ConfigProvider } from 'antd';
import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const { color, setColor } = useAppStore();
  useEffect(() => {
    setColor(color);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color,
        },
        components: {
          Input: {
            activeShadow: '',
          },
          Button: {
            defaultShadow: '',
          },
          InputNumber: {
            activeShadow: '',
          },
        },
      }}
    >
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
