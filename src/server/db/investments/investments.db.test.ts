import { addInvestment } from "./invesmtents.db";
import type { Database, DBClient } from "@/server/db/types";
import { createClient } from "@supabase/supabase-js";
import { beforeEach } from "node:test";
import { describe, expect, it } from "vitest";

const dbClient: DBClient = createClient<Database>(
  "https://w.test-url.com",
  "test.key",
);
const investmentTable = dbClient.from("investments");

describe("investments DB", () => {
  beforeEach(async () => {
    await investmentTable.delete();
  });

  it("should add a new investment given a user_uid, ticker, amount", async () => {
    const newInvestment = {
      user_uid: "test-user",
      ticker: "test-ticker",
      amount: 100,
    };
    const { id } = await addInvestment(newInvestment, dbClient);

    const rowInDB = (await investmentTable.select("*").filter("id", "eq", id))
      .data;

    expect(rowInDB).not.toBeNull();
    expect(rowInDB![0]).toMatchObject({
      ...newInvestment,
      id,
    });
  });
});
