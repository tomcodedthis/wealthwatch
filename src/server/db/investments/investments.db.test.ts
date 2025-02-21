import type { DBClient } from "@/server/db/types";
import { faker } from "@faker-js/faker";
import { describe, expect, it, vi } from "vitest";
import { addInvestment, type AddInvestmentProps } from "./invesmtents.db";

const mockedInvestment: AddInvestmentProps = {
  user_uid: faker.string.ulid(),
  ticker: faker.string.alpha(4).toUpperCase(),
  amount: faker.number.float({ fractionDigits: 4 }),
};

describe("investments DB", () => {
  it("should add a new investment given a user_uid, ticker, amount", async () => {
    // Assemble
    const mockInsert = vi.fn().mockReturnValueOnce({
      select: vi.fn().mockResolvedValueOnce({
        error: null,
        data: [mockedInvestment],
      }),
    });
    const mockClient = {
      from: vi.fn().mockReturnValueOnce({ insert: mockInsert }),
    } as unknown as DBClient;

    // Act
    const newInvestment = await addInvestment(mockedInvestment, mockClient);

    // Assert
    expect(newInvestment).toMatchObject(mockedInvestment);
  });
});
