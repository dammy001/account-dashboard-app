import { FC, FormEvent } from 'react';
import useFormValidator from '@damilaredev/react-form-validation-hook';
import { Button, Input } from '@/components';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { login } from '@/store/reducer/features/authSlice';
import { useAppDispatch } from '@/hooks/useStore';

const Register: FC = () => {
  // const [loading, setLoading] = useState<boolean>(false);

  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    firstName: {
      value: '',
      checks: 'required',
    },
    lastName: {
      value: '',
      checks: 'required',
    },
    email: {
      value: '',
      checks: 'required|email',
    },
    password: {
      value: '',
      checks: 'required|alphaNumeric|minLength:8',
    },
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllFieldsValid()) return false;

    dispatch(login({ user: { ...values }, token: 'damilare' }));

    setTimeout(() => navigate('/app/dashboard'), 1000);
  };
  return (
    <>
      <div className="text-base font-thin text-center text-opacity-70">
        Track all your bank expenses in one place
      </div>
      <form className="sm:px-12 mt-8" onSubmit={submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            errors={errors}
            onChange={updateField}
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            errors={errors}
            onChange={updateField}
          />
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          errors={errors}
          onChange={updateField}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          errors={errors}
          onChange={updateField}
        />
        <span className="text-sm font-thin text-center text-opacity-70 flex justify-end">
          I forgot my password
        </span>
        <Button type="submit" className="btn-primary mt-5">
          <span>GET STARTED</span>
        </Button>
      </form>

      <span className="text-center mt-8 text-mono-blue text-opacity-70 text-sm">
        Already have an account?{' '}
        <Link to="/" className="underline">
          Sign in
        </Link>
      </span>
    </>
  );
};

export default Register;
