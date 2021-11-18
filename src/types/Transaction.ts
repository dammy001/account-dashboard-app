export interface TransactionI {
  id?: string | number;
  type: string;
  details: string;
  category?: string;
  amount: string | number;
  created_at?: Date | string | undefined;
}
