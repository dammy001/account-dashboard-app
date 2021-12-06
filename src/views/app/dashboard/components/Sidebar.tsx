import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogoWhite } from '@/components';
import { APP_PAGES } from '@/router/paths';
import { classNames } from '@/helpers/utils';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { closeSidebar } from '@/store/reducer/features/utilSlice';
import { getAccounts } from '@/store/reducer/features/accountSlice';

const sidebarLinks: Record<string, string>[] = [
  {
    to: APP_PAGES.dashboard,
    title: 'Dashboard',
  },
  {
    to: APP_PAGES.expenses,
    title: 'Expenses',
  },
  {
    to: APP_PAGES.wallets,
    title: 'Wallets',
  },
  {
    to: APP_PAGES.summary,
    title: 'Summary',
  },
  {
    to: APP_PAGES.accounts,
    title: 'Accounts',
  },
  {
    to: APP_PAGES.settings,
    title: 'Settings',
  },
];

export const AppSidebar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector(getAccounts);
  const location = useLocation();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [location, dispatch]);

  return (
    <div className="sidebar">
      <LogoWhite />
      <div className="sidebar-content">
        {accounts?.length ? (
          sidebarLinks?.map((link: Record<string, string>) => {
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  classNames(['sidebar-content-item', isActive && 'active'])
                }
              >
                {link.title}
              </NavLink>
            );
          })
        ) : (
          <SidebarLoading />
        )}
      </div>
    </div>
  );
};

export const SidebarLoading = (): JSX.Element => (
  <>
    <div className="h-1 bg-[#FFFFFF99] bg-opacity-60 rounded-xl" />
    <div className="h-1 w-8/12 bg-[#DADADA] rounded-xl mt-5" />
    <div className="h-1 bg-[#E6E8F1] mt-5 rounded-xl" />
    <div className="h-1 bg-[#5D66B0] mt-5 rounded-xl" />
  </>
);
