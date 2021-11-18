import { FC, ReactNode } from 'react';
import { useAppSelector } from '../hooks/useStore';
import { Navigate } from 'react-router-dom';
import { APP_PAGES } from '../router/paths';

export type isAuthProp = {
  children: ReactNode;
};

const IsAccountLinked: FC<isAuthProp> = ({ children }: isAuthProp) => {
  const hasAtLeastOneAccountLinked = useAppSelector(
    (state) => state?.auth?.user?.accounts?.length
  );

  return !hasAtLeastOneAccountLinked ? (
    <Navigate to={APP_PAGES.linkAccount} replace={true} />
  ) : (
    <div>{children}</div>
  );
};

export default IsAccountLinked;
