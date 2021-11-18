const ValidationRules: any = {
  email: {
    rule: (value: string): '' | RegExpMatchArray | null => {
      return (
        value &&
        value
          .toString()
          .match(
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
          )
      );
    },
    formatter: (fieldName: string): string => `${fieldName} is not valid`,
  },
  required: {
    rule: (value: any): boolean =>
      value && value !== undefined && value.toString().match(/\S/),
    formatter: (fieldName?: string): string =>
      fieldName ? `${fieldName} is required` : 'This field is required.',
  },
  numeric: {
    rule: (value: number): 0 | RegExpMatchArray | null =>
      value && value.toString().match(/^\d+$/),
    formatter: (fieldName: number | string): string =>
      `${fieldName} should contain only numbers.`,
  },
  alphaNumeric: {
    rule: (value: string): '' | RegExpMatchArray | null =>
      value && value.toString().match(/^[a-z0-9]+$/i),
    formatter: (fieldName: string): string =>
      `${fieldName} should not contain special characters, please use only alphabets and numbers.`,
  },
  alphabetic: {
    rule: (value: string | number): '' | 0 | RegExpMatchArray | null =>
      value && value.toString().match(/^[a-z]+$/i),
    formatter: (fieldName: string): string =>
      `${fieldName} should contain only alphabets.`,
  },
  maxLength: {
    rule: (value: number, number: string | number): any =>
      value && value.toString().length <= number,
    formatter: (fieldName: string, number: number): string => {
      return number
        ? `${fieldName} can contain maximum ${number} characters.`
        : `${fieldName} contains more characters than expected.`;
    },
  },
  minLength: {
    rule: (value: string | number, number: any): boolean | '' | 0 =>
      value && value.toString().length >= number,
    formatter: (fieldName: string, number: number): string =>
      number
        ? `${fieldName} should contain minimum ${number} characters.`
        : `${fieldName} contains less characters than expected.`,
  },
  phone: {
    rule: (value: string): '' | RegExpMatchArray | null =>
      value && value.toString().match(/^(\+|)(234|0)(7|8|9)(0|1)\d{8}$/),
    formatter: (value: number): string =>
      `${value} should contain valid phone number`,
  },
  url: {
    rule: (value: string) =>
      value &&
      value
        .toString()
        .match(
          /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
        ),
    formatter: (fieldName?: string) =>
      fieldName
        ? `${fieldName} must be valid url`
        : 'This field must be a valid url',
  },
  in: {
    rule: (value: string | number, params: any[]): boolean | '' | 0 =>
      value && params?.includes(value.toString()),
    formatter: (fieldName: string, params: any[]): string =>
      `${fieldName} not in any of ${params}`,
  },
  notIn: {
    rule: (value: string | number, params: any[]): boolean | '' | 0 =>
      value && !params?.includes(value.toString()),
    formatter: (fieldName: string, params: any[]): string =>
      `${fieldName} in any of ${params}`,
  },
  digitsBetween: {
    rule: (value: string | number, params: any[]): boolean | '' | 0 =>
      value &&
      value.toString().length >= params[0] &&
      value.toString().length <= params[1],
    formatter: (fieldName: string, params: any[]): string =>
      `${fieldName} must be a number and between ${params[0]} and ${params[1]}`,
  },
  regex: {
    rule: (
      value: string | number,
      regex: any
    ): '' | 0 | RegExpMatchArray | null =>
      value && value.toString().match(regex),
    formatter: (fieldName: string): string =>
      `${fieldName} does not match the regex provided`,
  },
  size: {
    rule: (value: string | number, param: number): '' | 0 | boolean | null => {
      return value && value.toString().length === param;
    },
    formatter: (fieldName: string, param: string): string =>
      `${fieldName} must be exactly ${param} characters long`,
  },
  cardNumber: {
    rule: (value: string) => {
      return (
        value &&
        value
          .toString()
          .match(
            /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/
          )
      );
    },
    formatter: (fieldName: string): string =>
      `${fieldName} is not a valid card number`,
  },
};

export default ValidationRules;
