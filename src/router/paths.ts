export const path = (root: string, route: string): string => `${root}${route}`;

export const ROOTS = {
  app: '/app/',
  root: '/',
};

export const AUTH_PAGES = {
  login: path(ROOTS.root, ''),
  register: path(ROOTS.root, 'register'),
  forgotPassword: path(ROOTS.root, 'forgot-password'),
};

export const APP_PAGES = {
  dashboard: path(ROOTS.app, 'dashboard'),
  linkAccount: path(ROOTS.app, 'link-account'),
  expenses: path(ROOTS.app, 'expenses'),
  wallets: path(ROOTS.app, 'wallets'),
  summary: path(ROOTS.app, 'summary'),
  accounts: path(ROOTS.app, 'accounts'),
  settings: path(ROOTS.app, 'settings'),
};
