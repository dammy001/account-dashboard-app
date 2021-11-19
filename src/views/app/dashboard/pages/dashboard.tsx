import { FC, lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import { AccountType } from '../components/Account';
import { HeaderType } from '../components/Header';
import { ExpenseProgress } from '../components/ExpenseTracker';
import { AccountI } from '../../../../types/Account';
import IsAccountLinked from '../../../../middlewares/IsAccountLinked';
import { useAppSelector } from '../../../../hooks/useStore';
import { getAccounts, totalAccountBalance } from '../../../../store';

const Account: LazyExoticComponent<NamedExoticComponent<AccountType>> = lazy(
  () => import('../components/Account')
);
const Header: LazyExoticComponent<NamedExoticComponent<HeaderType>> = lazy(
  () => import('../components/Header')
);
const LatestTransaction: LazyExoticComponent<NamedExoticComponent<{}>> = lazy(
  () => import('../components/LatestTransaction')
);
const ExpenseTracker: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import('../components/ExpenseTracker')
);

const Dashboard: FC = () => {
  const accounts: AccountI[] | null = useAppSelector(getAccounts);
  const balance: number | undefined = useAppSelector(totalAccountBalance);

  return (
    <IsAccountLinked>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 min-h-screen">
        <div className="col-span-1 sm:col-span-7 pt-10 px-6 sm:px-16 flex flex-col">
          <Header firstName="Damilare" />
          <ExpenseTracker />
          <LatestTransaction />
        </div>
        <div className="col-span-1 sm:col-span-5 pt-10 px-6 sm:px-16 md:px-18 bg-mono-sky/50">
          <Account balance={balance} linkedAccounts={accounts as AccountI[]} />
          <ExpenseProgress />
        </div>
      </div>
    </IsAccountLinked>
  );
};

export default Dashboard;
