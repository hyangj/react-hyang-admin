import AppHeader from '@/components/AppHeader';
import AppSettings from '@/components/AppSettings';
import AppSidebar from '@/components/AppSidebar';
import useAppStore from '@/store/appStore.ts';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const { debug } = useAppStore();
  return (
    <div className="wrapper flex w-full">
      <AppSidebar />

      <main className="flex flex-col flex-1">
        <AppHeader />

        <div className="content">
          <div className="content__blocks">
            {/* 실제 렌더링 페이지 들어가는 곳 */}
            <Outlet />
          </div>
        </div>
      </main>

      {debug && <AppSettings />}
    </div>
  );
};

export default DefaultLayout;
