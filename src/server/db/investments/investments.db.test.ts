import type { DBClient } from "@/server/db/types";
import { faker } from "@faker-js/faker";
import { describe, expect, it, vi } from "vitest";
import { addInvestment, type AddInvestmentProps } from "./invesmtents.db";

const mockedInvestment: AddInvestmentProps = {
  user_uid: faker.string.ulid(),
  ticker: faker.string.alpha(4).toUpperCase(),
  amount: faker.number.float({ fractionDigits: 4 }),
};

function getMockClient(returnValue: {
  error?: Error;
  data?: AddInvestmentProps[];
}): DBClient {
  return {
    from: vi.fn().mockReturnValueOnce({
      insert: vi.fn().mockReturnValueOnce({
        select: vi.fn().mockResolvedValueOnce(returnValue),
      }),
    }),
  } as unknown as DBClient;
}

describe("investments DB", () => {
  it("should add a new investment given a user_uid, ticker, amount", async () => {
    // Assemble
    const client = getMockClient({ data: [mockedInvestment] });

    // Act
    const newInvestment = await addInvestment(mockedInvestment, client);

    // Assert
    expect(newInvestment).toMatchObject(mockedInvestment);
  });

  it("should fail to add a new investment if error in response", async () => {
    // Assemble
    const client = getMockClient({ error: new Error("Failure") });

    // Act & Assert
    await expect(addInvestment(mockedInvestment, client)).rejects.toThrow(
      "Failed to add investment",
    );
  });

  it("should fail to add a new investment no data in response", async () => {
    // Assemble
    const client = getMockClient({});

    // Act & Assert
    await expect(addInvestment(mockedInvestment, client)).rejects.toThrow(
      "Failed to add investment",
    );
  });

  it("should fail to add a new investment empty data in response", async () => {
    // Assemble
    const client = getMockClient({ data: [] });

    // Act & Assert
    await expect(addInvestment(mockedInvestment, client)).rejects.toThrow(
      "Failed to add investment",
    );
  });
});
