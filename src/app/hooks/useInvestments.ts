import {
  ASSET_SPLIT_CONFIG,
  ASSET_SPLIT_DATA,
  MONTHLY_INVESTMENTS,
  YEARLY_INVESTMENTS,
} from "@/lib/mocks/investments.data";

export function getInvestments() {
  const monthly = MONTHLY_INVESTMENTS;
  const yearly = YEARLY_INVESTMENTS;
  const assetSplit = {
    data: ASSET_SPLIT_DATA,
    config: ASSET_SPLIT_CONFIG,
  };

  return { monthly, yearly, assetSplit };
}
