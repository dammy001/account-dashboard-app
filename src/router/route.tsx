import { FC, Fragment, lazy, LazyExoticComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import ErrorBoundary from '../components/error/ErrorBoundary';
import { APP_PAGES, AUTH_PAGES } from './paths';
import { SuspenseLoader } from '../components';
import { isAuthProp } from '../middlewares/IsAuthenticated';

const PageNotFound: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import('../views/404')
);

const IsAuthenticated: LazyExoticComponent<FC<isAuthProp>> = lazy(
  () => import('../middlewares/IsAuthenticated')
);
const DashboardLayout: LazyExoticComponent<FC<{}>> = lazy(
  () => import('../layouts/DashboardLayout')
);

export type BaseRouteType = {
  path?: string;
  layout?: any;
  component?:
    | LazyExoticComponent<() => JSX.Element>
    | LazyExoticComponent<FC<Record<string, any>>>;
  index?: boolean;
  guard?: any;
  routes?: BaseRouteType[];
  [key: string]: any;
};

export const renderRoutes = (routes: BaseRouteType[] = []): JSX.Element => {
  return (
    <Routes>
      {routes?.map((route: BaseRouteType, i: number) => {
        const Component = route?.component as LazyExoticComponent<
          () => JSX.Element
        >;
        const Guard = route?.guard || Fragment;
        const Layout = route?.layout || Fragment;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <ErrorBoundary>
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route?.routes)
                    ) : (
                      <Suspense fallback={<SuspenseLoader />}>
                        <Component />
                      </Suspense>
                    )}
                  </Layout>
                </Guard>
              </ErrorBoundary>
            }
          />
        );
      })}
      <Route
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <IsAuthenticated>
              <DashboardLayout />
            </IsAuthenticated>
          </Suspense>
        }
      >
        {dashboardRoutes?.map((route: BaseRouteType, key: number) => {
          const Component = route?.component as LazyExoticComponent<
            () => JSX.Element
          >;

          return (
            <Route
              path={route.path}
              key={key}
              index={route.index}
              element={
                <ErrorBoundary>
                  <Component />
                </ErrorBoundary>
              }
            />
          );
        })}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const dashboardRoutes: BaseRouteType[] = [
  {
    path: APP_PAGES.dashboard,
    index: true,
    component: lazy(() => import('../views/app/dashboard/pages/dashboard')),
  },
  {
    path: APP_PAGES.accounts,
    index: true,
    component: lazy(() => import('../views/app/accounts/pages')),
  },
  {
    path: APP_PAGES.linkAccount,
    index: true,
    component: lazy(() => import('../views/app/accounts/pages/link-account')),
  },
  {
    path: APP_PAGES.wallets,
    index: true,
    component: lazy(() => import('../views/app/wallets')),
  },
  {
    path: APP_PAGES.expenses,
    index: true,
    component: lazy(() => import('../views/app/expenses')),
  },
  {
    path: APP_PAGES.summary,
    index: true,
    component: lazy(() => import('../views/app/summary')),
  },
  {
    path: APP_PAGES.settings,
    index: true,
    component: lazy(() => import('../views/app/settings')),
  },
];

const routes: BaseRouteType[] = [
  {
    path: '*',
    layout: AuthLayout,
    routes: [
      {
        path: AUTH_PAGES.login,
        index: true,
        component: lazy(() => import('../views/auth/pages/login')),
      },
      {
        path: AUTH_PAGES.register,
        index: true,
        component: lazy(() => import('../views/auth/pages/register')),
      },
      {
        path: AUTH_PAGES.forgotPassword,
        index: true,
        component: lazy(() => import('../views/auth/pages/forgot-password')),
      },
    ],
  },
];

export default routes;
