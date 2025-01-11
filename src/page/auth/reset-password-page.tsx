import React, { useState, useReducer, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/shared/spinner';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import AuthRequest from '../../type/temp/auth/auth_request.type';

// Define the LoginPage component
const ResetPasswordPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [isUsernameError, setUsernameError] = useState<boolean>(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>('');

  const [isPasswordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const [isConfirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  // Initial form data
  const initialData: AuthRequest = {
    username: '',
    password: '',
  };

  // Reducer function for form data
  function formReducer(state: AuthRequest, action: { name: string; value: string }): AuthRequest {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  const [formData, dispatch] = useReducer(formReducer, initialData);

  function handleClickShowPassword(): void {
    setShowPassword(!showPassword);
  }

  function handleClickShowConfirmPassword(): void {
    setShowConfirmPassword(!showConfirmPassword);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  // Reset error messages
  const resetPasswordErrorMessage = () => {
    setPasswordError(false);
    setPasswordErrorMessage('');
  };

  const resetUsernameErrorMessage = () => {
    setUsernameError(false);
    setUsernameErrorMessage('');
  };
  // Validate form data
  const validateFormData = (formData: AuthRequest): boolean => {
    let isValid = true;

    if (!formData.username || formData.username.trim() === '') {
      setUsernameError(true);
      setUsernameErrorMessage('Username is required');
      isValid = false;
    } else {
      resetUsernameErrorMessage();
    }

    if (!formData.password || formData.password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long');
      isValid = false;
    } else {
      resetPasswordErrorMessage();
    }

    return isValid;
  };

  const handleSubmit = function () {
    // Implement the handleChange function
    if (validateFormData(formData)) {
      // If the email is invalid, set the disabled state to false
    }
    navigate('/login');
    setDisabled(true);
  };

  useEffect(() => {
    if (code === 'ok') {
      setValidCode(true);
    } else {
      setValidCode(false);
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner loading={true} alignStyle="flex justify-center items-center h-screen" />;
  }

  return (
    <div className="max-w-[1200px] mx-auto py-2 my-2 px-4 font-sans">
      <h1 className="text-[1.5em] font-semibold text-black mb-5 leading-[1.1]">Reset password</h1>

      <form className="space-y-6">
        <TextField
          label="Username"
          placeholder="Username"
          type="text"
          variant="outlined"
          fullWidth
          id="username"
          onChange={handleChange}
          name="username"
          error={isUsernameError}
          helperText={usernameErrorMessage}
          color={isUsernameError ? 'error' : 'primary'}
          InputLabelProps={{
            style: { fontSize: '14px', color: '#6E6E6E' },
          }}
          InputProps={{
            style: { fontSize: '14px', height: '48px' },
          }}
        />

        <TextField
          label="Password"
          placeholder="Password"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          id="password"
          name="password"
          error={isPasswordError}
          helperText={passwordErrorMessage}
          color={isPasswordError ? 'error' : 'primary'}
          InputLabelProps={{
            style: { fontSize: '14px', color: '#6E6E6E' },
          }}
          InputProps={{
            style: { fontSize: '14px', height: '48px' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          id="confirmPassword"
          name="confirmPassword"
          error={isConfirmPasswordError}
          helperText={confirmPasswordErrorMessage}
          color={isConfirmPasswordError ? 'error' : 'primary'}
          InputLabelProps={{
            style: { fontSize: '14px', color: '#6E6E6E' },
          }}
          InputProps={{
            style: { fontSize: '14px', height: '48px' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                  {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
                Save
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
