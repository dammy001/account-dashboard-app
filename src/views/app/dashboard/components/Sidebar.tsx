import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogoWhite } from '../../../../components';
import { APP_PAGES } from '../../../../router/paths';
import { classNames } from '../../../../helpers/utils';
import { useAppDispatch } from '../../../../hooks/useStore';
import { closeSidebar } from '../../../../store/reducer/features/utilSlice';

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
  const location = useLocation();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [location]);

  return (
    <div className="sidebar">
      <LogoWhite />
      <div className="sidebar-content">
        {sidebarLinks?.map((link: Record<string, string>, i: number) => {
          return (
            <NavLink
              key={i}
              to={link.to}
              className={({ isActive }) =>
                classNames(['sidebar-content-item', isActive && 'active'])
              }
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
