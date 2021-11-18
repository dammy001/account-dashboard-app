import { FC, memo } from 'react';
import { User } from '../../../../types/User';
import { MoreIcon, Transaction } from '../../../../components';

export type PropType = {
  user?: User;
};

const LatestTransaction: FC<PropType> = ({ user }: PropType): JSX.Element => {
  {
    user;
  }
  return (
    <div className="flex flex-col mt-12">
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-[23px] font-light leading-normal">
          Latest Transactions
        </h3>
        <MoreIcon onClick={() => console.log('yeah')} />
      </div>
      <Transaction transactions={[]} />
    </div>
  );
};

export default memo<PropType>(LatestTransaction);
