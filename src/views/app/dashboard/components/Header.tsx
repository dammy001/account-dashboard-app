import { FC, memo } from 'react';
import { ImageWithFallback } from '../../../../components';
import { timeOfDay } from '../../../../helpers/utils';
import { useAppDispatch } from '../../../../hooks/useStore';
import { toggleSidebar } from '../../../../store/reducer/features/utilSlice';

export type HeaderType = {
  firstName: string;
};

const Header: FC<HeaderType> = ({ firstName }: HeaderType): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      <div className="inline-flex items-center">
        <button
          className="close block sm:hidden mr-3"
          onClick={() => dispatch(toggleSidebar())}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <div className="flex justify-center items-center rounded-full w-10 h-10 bg-mono-blue/50">
          <ImageWithFallback src="" alt="image" />
        </div>
        <h2 className="text-mono-darkblue text-base font-semibold tracking-tight ml-5">
          {timeOfDay()}, {firstName}
        </h2>
      </div>
    </div>
  );
};

export default memo<HeaderType>(Header);
