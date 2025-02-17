import type { DBClient } from "@/server/db/types";

interface AddInvestmentParams {
  user_uid: string;
  ticker: string;
  amount: number;
}

export async function addInvestment(
  { user_uid, ticker, amount }: AddInvestmentParams,
  client: DBClient,
) {
  return {
    id: "",
  };
}
