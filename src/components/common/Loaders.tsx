import { FC } from 'react';

export const Spinner: FC = (): JSX.Element => (
  <svg className="loader" viewBox="0 0 24 24">
    <circle className="loader_value" cx="12" cy="12" r="10" />
    <circle className="loader_value" cx="12" cy="12" r="10" />
    <circle className="loader_value" cx="12" cy="12" r="10" />
    <circle className="loader_value" cx="12" cy="12" r="10" />
    <circle className="loader_value" cx="12" cy="12" r="10" />
    <circle className="loader_value" cx="12" cy="12" r="10" />
  </svg>
);

export const SuspenseLoader: FC = (): JSX.Element => (
  <div
    className="bg-black/30 fixed grid h-full inset-0 place-items-center w-full z-10"
    style={{ backdropFilter: 'blur(4px)' }}
  >
    <Spinner />
  </div>
);
