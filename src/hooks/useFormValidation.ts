import { useReducer, ChangeEvent } from 'react';
import ValidationRules from '../helpers/validationRules';

const validate = ({ key, value, values, checks, customValidator }: any) => {
  if (checks) {
    const rules = checks.split('|');

    let errorMessage = '';

    if (rules.length) {
      rules.forEach((rule: Record<string, any>) => {
        const ruleType: any = rule.split(':');

        const ruleName = ruleType.shift();

        const params = ruleType.length ? ruleType.pop().split(',') : [];

        const validation = ValidationRules[ruleName];

        let testArguments = [];
        let formatterArguments = [];

        switch (ruleName) {
          case 'maxLength':
          case 'minLength':
          case 'regex':
          case 'size':
            testArguments = [value, params[0]];
            formatterArguments = [key, params[0]];
            break;
          case 'in':
          case 'notIn':
          case 'digitsBetween':
          case 'creditCard':
            testArguments = [value, params];
            formatterArguments = [key, params];
            break;
          default:
            testArguments = [value];
            formatterArguments = [key];
            break;
        }

        if (
          ruleName.match(/nullable/) &&
          (!value || (value?.constructor === Array && value.length < 1))
        ) {
          return true;
        }

        const isRuleSatisfied =
          ruleName !== 'required' && !value
            ? true
            : !!validation.rule.apply(null, testArguments);

        if (!isRuleSatisfied) {
          errorMessage = validation.formatter.apply(null, formatterArguments);
        }
      });
    }

    return errorMessage;
  }

  return (
    typeof customValidator === 'function' && customValidator(value, values)
  );
};

const reducer = (state: any, action: Record<string, any>) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: validate({
            key: action.payload.key,
            value: action.payload.value,
            values: state.values,
            checks: state.checks[action.payload.key],
            customValidator: state.validators[action.payload.key],
          }),
        },
        values: {
          ...state.values,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      break;
  }
};

const useFormValidator = (inputs: Record<string, any>) => {
  const initial: Record<string, any> = {
    checks: {},
    values: {},
    validators: {},
    errors: {},
    messages: {},
  };

  for (const key in inputs) {
    initial.checks[key] = inputs[key]?.checks;
    initial.validators[key] = inputs[key]?.validate;
    initial.values[key] = inputs[key]?.value;
    initial.errors[key] = '';
  }

  const [fields, setFormField] = useReducer(reducer, initial);

  const validateField = ({ key, value }: Record<string, any>): void => {
    if (fields.values[key] === undefined) {
      throw Error(`Field with key "${key}" not found, please make sure it is define in as follows:
      useFormValidator({
        ${key}: {
          value: "",
          checks: "required"
        }
      })
      `);
    }

    setFormField({
      type: 'UPDATE_FIELD',
      payload: {
        key,
        value,
      },
    });
  };

  const isFieldValid = (key: string): boolean => {
    validateField({
      key,
      value: fields.values[key],
    });
    // if error exist
    if (fields.errors[key]) return false;
    // else
    return true;
  };

  const updateField = (e?: ChangeEvent<HTMLInputElement | undefined>): void => {
    validateField({
      key: e?.target.name,
      value: e?.target.value,
    });
  };

  const isAllFieldsValid = (): boolean => {
    let valid = true;

    for (const key in fields.values) {
      const error = validate({
        value: fields.values[key],
        checks: fields.checks[key],
      });

      if (error) valid = false;

      setFormField({
        type: 'UPDATE_FIELD',
        payload: {
          key,
          value: fields.values[key],
          checks: fields.checks[key],
        },
      });
    }

    return valid;
  };

  return {
    values: fields.values,
    errors: fields.errors,
    isAllFieldsValid,
    isFieldValid,
    updateField,
  };
};

export default useFormValidator;
