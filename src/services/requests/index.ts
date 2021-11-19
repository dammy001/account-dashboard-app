import accountEndpoints from './account';
import authEndpoints from './auth';

export const apiRequests = {
  ...accountEndpoints,
  ...authEndpoints,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const $sendRequest = (path: string = '', ...params: any) => {
  const fullPath = path.split('.');

  const request = fullPath.reduce(
    (last: any, current: any) => last[current],
    apiRequests
  );

  if (!request) {
    throw new Error(`Invalid Request ${path}; Request Not Registered`);
  }

  return request.call(this, ...params);
};
