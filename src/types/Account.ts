export interface AccountI {
  id: number | string;
  user_id: number;
  account_name?: string;
  balance: number | string;
  logo: string;
  is_active?: boolean;
  linked_at?: Date | undefined | null;
  unlinked_at?: Date | undefined | null;
}
