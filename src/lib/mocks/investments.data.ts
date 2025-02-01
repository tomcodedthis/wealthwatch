const MONTHLY_HEADERS = ["Month", "Invested", "Return (£)", "Return (%)"];
const MONTHLY_ROWS = [
  {
    month: "January",
    invested: 100,
    return: { currency: 200, percent: 100 },
  },
  {
    month: "February",
    invested: 150,
    return: { currency: 250, percent: 166.67 },
  },
  {
    month: "March",
    invested: 200,
    return: { currency: 300, percent: 150 },
  },
  {
    month: "April",
    invested: 250,
    return: { currency: 400, percent: 160 },
  },
  {
    month: "May",
    invested: 300,
    return: { currency: 500, percent: 166.67 },
  },
  {
    month: "June",
    invested: 350,
    return: { currency: 600, percent: 171.43 },
  },
  {
    month: "July",
    invested: 400,
    return: { currency: 700, percent: 175 },
  },
  {
    month: "August",
    invested: 450,
    return: { currency: 800, percent: 177.78 },
  },
  {
    month: "September",
    invested: 500,
    return: { currency: 900, percent: 180 },
  },
  {
    month: "October",
    invested: 550,
    return: { currency: 1000, percent: 181.82 },
  },
  {
    month: "November",
    invested: 600,
    return: { currency: 1100, percent: 183.33 },
  },
  {
    month: "December",
    invested: 650,
    return: { currency: 1200, percent: 184.62 },
  },
];

const investedTotal = MONTHLY_ROWS.reduce((sum, row) => sum + row.invested, 0);
const returnTotal = MONTHLY_ROWS.reduce(
  (sum, row) => sum + row.return.currency,
  0,
);
const percentTotal = parseFloat(
  ((returnTotal / investedTotal) * 100).toPrecision(3),
);
const MONTHLY_FOOTERS = ["TOTAL", investedTotal, returnTotal, percentTotal];
export const MONTHLY_INVESTMENTS = {
  headers: MONTHLY_HEADERS,
  rows: MONTHLY_ROWS,
  footers: MONTHLY_FOOTERS,
};

const YEARLY_ROWS = [
  { title: "Stocks", value: 15000 },
  { title: "Crypto", value: 15000 },
  { title: "Invested", value: 10000 },
  { title: "Return", value: 30000 },
  { title: "P/L (£)", value: 20000 },
  { title: "P/L (%)", value: 200 },
];
export const YEARLY_INVESTMENTS = {
  headers: [],
  rows: YEARLY_ROWS,
  footers: [],
};
