import {
  MONTHLY_INVESTMENTS,
  YEARLY_INVESTMENTS,
} from "@/lib/mocks/investments.data";

export function getInvestments() {
  const monthly = MONTHLY_INVESTMENTS;
  const yearly = YEARLY_INVESTMENTS;

  return { monthly, yearly };
}
