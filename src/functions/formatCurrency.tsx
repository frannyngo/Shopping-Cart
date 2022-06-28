const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "CAD",
  style: "currency",
});

export default function formatCurrency(number: number) {
  return CURRENCY_FORMAT.format(number);
}
