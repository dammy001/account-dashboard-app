import { AccountI } from './Account';

export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  accounts?: AccountI[];
  createdAt: string | Date;
};
