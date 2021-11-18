import { memo, ReactNode } from 'react';
import { formatAmount } from '../../../../helpers/utils';
import { Button, ImageWithFallback } from '../../../../components';
import { AccountI } from '../../../../types/Account';

export type AccountType = {
  balance?: number | string;
  linkedAccounts?: AccountI[];
  [key: string]: unknown;
};

export type LinkedAccountType = {
  accounts?: AccountI[];
  children?: ReactNode;
};

const Account = ({ balance, linkedAccounts }: AccountType): JSX.Element => {
  return (
    <div className="p-8 text-center bg-white rounded-lg shadow-card">
      <h3 className="text-xl">TOTAL BALANCE</h3>
      <h2 className="text-4xl sm:text-5xl mt-3">{formatAmount(balance)}</h2>
      <div className="text-lg font-thin mt-2 text-[#404852]">
        Your balance across all Banks
      </div>

      <div className="flex justify-center">
        <LinkedAccounts accounts={linkedAccounts}>
          <div className="account-wrap border ml-3 text-3xl font-thin text-[#D2DCE8]">
            +
          </div>
        </LinkedAccounts>
      </div>

      <Button className="btn-secondary mt-8" type="button">
        UNLINK BANK ACCOUNT
      </Button>
    </div>
  );
};

export const LinkedAccounts = ({
  accounts,
  children,
}: LinkedAccountType): JSX.Element => {
  return (
    <div className="flex flex-wrap sm:flex-row mt-5">
      {accounts?.map((account: AccountI, e: number) => {
        return (
          <div className="account-wrap bg-mono-blue/40 -ml-1" key={e}>
            <ImageWithFallback src={account.logo as string} alt="image" />
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default memo<AccountType>(Account);
