import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../components/shared/spinner';
// Define the LoginPage component
const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [isDisabled, setDisabled] = useState<boolean>(false);

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
      const isResetPassword = true;
      const titleResetPassword = 'Reset password';
      navigate('/login', { state: { isResetPassword, titleResetPassword } });
    }
    setDisabled(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-10 my-10 px-4 font-sans">
      <h1 className="text-[1.5em] font-semibold text-black mb-5 leading-[1.1]">Reset password</h1>

      <p className="mb-5 text-[16px] leading-[1.5]">
        Enter the email you used to sign up for a TMDB account and we'll send you the steps required to reset your
        password.
      </p>

      <form className="space-y-6">
        <TextField
          label="Email"
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={email}
          id="email"
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
                Continue
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

export default ForgotPasswordPage;
