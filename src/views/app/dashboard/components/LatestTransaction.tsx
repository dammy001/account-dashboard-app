import { FC, memo, useEffect } from 'react';
import { User } from '../../../../types/User';
import { MoreIcon, Transaction } from '../../../../components';
import { Link } from 'react-router-dom';
import { APP_PAGES } from '../../../../router/paths';

export type PropType = {
  user?: User;
};

const LatestTransaction: FC<PropType> = ({ user }: PropType): JSX.Element => {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex flex-col mt-12">
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-[23px] font-light leading-normal">
          Latest Transactions
        </h3>
        <MoreIcon onClick={() => console.log('yeah')} />
      </div>
      <Transaction transactions={[]} />

      <div className="flex justify-center items-center text-sm text-[#404852] mt-5 mb-5">
        <Link to={APP_PAGES.expenses}>VIEW ALL</Link>
      </div>
    </div>
  );
};

export default memo<PropType>(LatestTransaction);
