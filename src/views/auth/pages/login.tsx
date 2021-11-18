import { FC, FormEvent, useState } from 'react';
import useFormValidator from '../../../hooks/useFormValidation';
import { Button, Input, Checkbox } from '../../../components';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useStore';
import { login } from '../../../store/reducer/features/authSlice';

const Login: FC = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    email: {
      value: '',
      checks: 'required|email',
    },
    password: {
      value: '',
      checks: 'required',
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
        Securely login to your account
      </div>
      <form className="sm:px-12 mt-8" onSubmit={submit}>
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
        <div className="flex justify-between mb-5">
          <Checkbox
            name="remember"
            labelText="Remember me"
            checked={rememberMe}
            onChange={setRememberMe}
          />
          <span className="text-sm font-thin text-center text-opacity-70">
            I forgot my password
          </span>
        </div>
        <Button type="submit" className="btn-primary">
          <span>LOG IN</span>
        </Button>
      </form>

      <span className="text-center mt-5 text-mono-blue text-opacity-70 text-sm">
        Don’t have an account?{' '}
        <Link to="register" className="underline">
          Sign up
        </Link>
      </span>
    </>
  );
};

export default Login;
