import { MutableRefObject, useRef } from 'react';
import { formatAmount } from '@/helpers/utils';
import { BarChart, MoreIcon, ProgressBar } from '@/components';

const _data = [
  { value: 599, color: '#9DC8FF' },
  { value: 607, color: '#9DC8FF' },
  { value: 100, color: '#9DC8FF' },
  { value: 444, color: '#9DC8FF' },
  { value: 685, color: '#9DC8FF' },
  { value: 294, color: '#9DC8FF' },
  { value: 600, color: '#9DC8FF' },
  { value: 550, color: '#9DC8FF' },
  { value: 600, color: '#9DC8FF' },
  { value: 500, color: '#9DC8FF' },
  { value: 500, color: '#9DC8FF' },
  { value: 100, color: '#9DC8FF' },
  { value: 500, color: '#9DC8FF' },
  { value: 200, color: '#9DC8FF' },
  { value: 300, color: '#9DC8FF' },
  { value: 200, color: '#9DC8FF' },
  { value: 300, color: '#9DC8FF' },
  { value: 300, color: '#9DC8FF' },
  { value: 0, color: '#9DC8FF' },
];

const ExpenseTracker = (): JSX.Element => {
  return (
    <div className="flex flex-col mt-6">
      <h1 className="text-center text-2xl">Expense Tracker</h1>
      <BarChart data={_data} />
    </div>
  );
};

export const ExpenseProgress = () => {
  const progressRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="flex justify-between items-center border-b pb-2 mt-8">
        <h3 className="text-[23px] font-light leading-normal">
          Where your money go?
        </h3>
        <MoreIcon />
      </div>
      {[...Array(5)].map((number: number) => {
        return (
          <div className="flex flex-col mt-5" key={number}>
            <div className="flex justify-between items-center text-[17px] mb-3">
              <h3 className="mb-1 tracking-wide">Food and Drinks</h3>
              <span className="font-thin">{formatAmount(872.4)}</span>
            </div>
            <ProgressBar progress={20} ref={progressRef} />
          </div>
        );
      })}
    </>
  );
};

export default ExpenseTracker;
