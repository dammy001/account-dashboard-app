import { FC, ReactNode } from 'react';
import { useAppSelector } from '../hooks/useStore';
import { Navigate } from 'react-router-dom';

export type isAuthProp = {
  children: ReactNode;
};

const IsAuthenticated: FC<isAuthProp> = ({ children }: isAuthProp) => {
  const token = useAppSelector((state) => state?.auth?.token);

  return !token ? <Navigate to="/" replace={true} /> : <div>{children}</div>;
};

export default IsAuthenticated;
