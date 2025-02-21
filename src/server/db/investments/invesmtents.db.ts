import type { DBClient } from "@/server/db/types";

export interface Investment {
  user_uid: string;
  amount: number;
  ticker: string;
  created_at: string;
}

export type AddInvestmentProps = Omit<Investment, "created_at">;

export async function addInvestment(
  partialInvestment: AddInvestmentProps,
  client: DBClient,
) {
  const table = client.from("investments");
  const response = await table.insert([partialInvestment]).select();

  if (response.error || response.data == null || response.data.length === 0) {
    throw Error("Failed to add investment");
  }

  return response.data[0];
}
