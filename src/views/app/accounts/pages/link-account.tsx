import { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AccountI } from 'src/types';
import { ArrowUpRightIcon, Button, LockIcon } from '@/components';
import { useAppDispatch } from '@/hooks/useStore';
import { linkAccount } from '@/store/reducer/features/accountSlice';

const account: AccountI = {
  id: 1,
  user_id: 1,
  account_name: 'damilare anjorin',
  balance: 500000,
  logo: 'https://damilareanjorin',
  is_active: true,
  linked_at: null,
  unlinked_at: null,
};

const LinkAccount: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const linkBankAccount = (): void => {
    dispatch(linkAccount(account));
    setTimeout(() => navigate('/app/dashboard'), 500);
  };

  return (
    <div className="flex justify-center items-center mt-[45%] sm:mt-[18%]">
      <div className="flex flex-col p-12 w-11/12 text-center bg-black rounded-lg text-white sm:w-[393px]">
        <div className="flex justify-center items-center">
          <LockIcon />
        </div>
        <h4 className="text-3xl mt-3 font-light">Final Step</h4>
        <span className="mt-3 text-lg">Link your Bank Account in seconds</span>

        <Button
          className="btn-link mt-12"
          type="button"
          onClick={linkBankAccount}
        >
          <span className="inline-flex items-center text-[#182CD1] font-bold text-xl mr-2">
            LINK NOW
          </span>
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default LinkAccount;
