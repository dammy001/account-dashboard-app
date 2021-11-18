export const classNames = (className: any): string =>
  className?.filter(Boolean).join(' ');

export const timeOfDay = ():
  | 'Good Morning'
  | 'Good Afternoon'
  | 'Good Evening' => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) return 'Good Morning';

  if (currentHour >= 12 && currentHour < 18) return 'Good Afternoon';

  return 'Good Evening';
};

export const sentenceCase = (string: string) =>
  string?.replace(/(^(\w)|\s(\w))/g, (x) => x.toUpperCase());

export const replaceAt = (
  str: string,
  index: number,
  chr: string | number
): string => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

export const roundTo = (n: number, digits: number = 0): any => {
  let negative = false;
  let number: any = n;
  if (number < 0) {
    negative = true;
    number *= -1;
  }
  const multiplicator = 10 ** digits;
  number = parseFloat((number * multiplicator).toFixed(11));
  number = (Math.round(number) / multiplicator).toFixed(2);
  if (negative) {
    number = (number * -1).toFixed(2);
  }
  return number;
};

export const formatAmount = (x: number | string = 0): string =>
  `₦${Number(x)
    //.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const formatNumber = (n: number): string => {
  const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' },
  ];

  for (const range of ranges) {
    if (n >= range.divider) {
      return (n / range.divider).toFixed(1).toString() + range.suffix;
    }
  }

  return n.toString();
};
