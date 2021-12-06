import { ReactNode, FC } from 'react';
import { Logo } from '@/components';

type AuthLayout = {
  children: ReactNode;
};
const AuthLayout: FC<AuthLayout> = ({ children }: AuthLayout) => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="bg-white w-11/12 sm:w-5/12 pt-12 pb-12 px-4 sm:px-20 rounded-2xl flex flex-col">
        <div className="flex justify-center mb-5">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
