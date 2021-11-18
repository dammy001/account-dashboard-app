import { memo, NamedExoticComponent } from 'react';
import { classNames, formatAmount } from '../../../helpers/utils';
import { SubscriptionIcon, TransportIcon, CartIcon, HomeIcon } from '../..';
import { TransactionI } from '../../../types/Transaction';

export type TransactionType = {
  transactions?: TransactionI[];
  [key: string]: unknown;
};

export const Transaction: NamedExoticComponent<TransactionType> =
  memo<TransactionType>(({ transactions }: TransactionType) => {
    {
      transactions;
    }
    return (
      <div>
        {[...Array(5)].map((transaction: number) => {
          return (
            <div
              className="flex justify-between items-center mt-6 text-[17px]"
              key={transaction}
            >
              <div className="inline-flex items-center">
                <DetermineTransactionIcon category="rent" />

                <div className="flex flex-col ml-4">
                  <h3 className="mb-1 tracking-wide">Uber VIA Flutterwave</h3>
                  <span className="font-light text-[#404852] text-opacity-50">
                    10-11-2021 • 8:12 pm • Credit
                  </span>
                </div>
              </div>
              <h3 className="-mt-4">-{formatAmount(15000)}</h3>
            </div>
          );
        })}
      </div>
    );
  });

export const DetermineTransactionIcon = ({
  category,
}: {
  category: string;
}): JSX.Element => {
  let color: string;
  let icon: JSX.Element;

  switch (category) {
    case 'jumia':
      color = '#32A7E2';
      icon = <CartIcon />;
      break;
    case 'transportation':
      color = '#B548C6';
      icon = <TransportIcon />;
      break;
    case 'rent':
      color = '#FF8700';
      icon = <HomeIcon />;
      break;
    case 'subscription':
      color = '#DC3434';
      icon = <SubscriptionIcon />;
      break;
    default:
      color = '#32A7E2';
      icon = <SubscriptionIcon />;
      break;
  }

  return (
    <div
      className={classNames([
        'rounded-full flex items-center justify-center h-13 w-13',
      ])}
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
  );
};
