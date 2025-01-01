import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/shared/spinner';
import { AlertBox } from '../../components/page/auth/error-alert';
// Define the LoginPage component
const VerifyEmailPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  };
  function validateEmail(email: string): boolean {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Valid email is required');
      return false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
      return true;
    }
  }

  const handleSubmit = function () {
    // Implement the handleChange function
    setDisabled(true);

    if (!validateEmail(email)) {
      // If the email is invalid, set the disabled state to false
    } else {
      const isResendEmail = true;
      navigate('/login', { state: { isResendEmail } });
    }

    setDisabled(false);
  };

  useEffect(() => {
    if (token == 'ok') {
      const isEmailVerification = true;
      navigate('/login', { state: { isEmailVerification } });
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner alignStyle={'flex justify-center items-center mt-6'} loading={true} />;
  }

  return (
    <div className="max-w-[1200px] mx-auto py-2 my-2 px-4 font-sans">
      <h1 className="text-[1.5em] font-semibold text-black mb-2 leading-[1.1]">Resend activation email</h1>
      <AlertBox header="There was a problem">
        The email verification code is invalid. Your account is most likely verified,{' '}
        <Link className="text-blue-500" to="/login">
          click here
        </Link>{' '}
        to login.
      </AlertBox>
      <form className="space-y-6">
        <TextField
          label="Email"
          placeholder="What's your email?"
          type="text"
          variant="outlined"
          fullWidth
          id="email"
          onChange={handleChange}
          name="email"
          error={isEmailError}
          helperText={emailErrorMessage}
          color={isEmailError ? 'error' : 'primary'}
          InputLabelProps={{
            style: { fontSize: '14px', color: '#6E6E6E' },
          }}
          InputProps={{
            style: { fontSize: '14px', height: '48px' },
          }}
        />

        <div className="flex items-center gap-10">
          {isDisabled ? (
            <Spinner alignStyle={'flex justify-center items-center mt-6'} loading={true} />
          ) : (
            <>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  height: '38px',
                  width: '90px',
                  fontWeight: '600',
                  ':hover': { backgroundColor: '#333' },
                }}
              >
                Send
              </Button>
              <Link to="/login" className="text-blue-500 font-semibold hover:underline">
                Cancel
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyEmailPage;
