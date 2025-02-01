import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const parseToNumberOfDigits = (value: number, digits = 3): string => {
  const nonDecimalDigits = value.toString().split(".")[0];
  const hasDecimals = nonDecimalDigits && nonDecimalDigits.length < digits;
  return value.toLocaleString("en-GB", {
    style: "decimal",
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  });
};

const USER_CURRENCY = "£";

export const parseCurrency = (value: number): string =>
  `${USER_CURRENCY}${parseToNumberOfDigits(value)}`;

export const parsePercent = (value: number): string =>
  `${parseToNumberOfDigits(value)}%`;
