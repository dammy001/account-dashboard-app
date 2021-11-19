import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../views/app/dashboard/components/Sidebar';
import { useAppSelector } from '../hooks/useStore';
import { classNames } from '../helpers/utils';

const DashboardLayout: FC<{}> = () => {
  const isSidebarOpen = useAppSelector((state) => state.util.sidebarOpen);

  return (
    <div
      className={classNames(['app-layout', isSidebarOpen && 'sidebar-open'])}
    >
      <AppSidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
