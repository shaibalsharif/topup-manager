import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { auth, RecaptchaVerifier } from "../util/firebase";

const Login = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const { loginWithEmail, loginWithPhone, loginWithGoogle } = useAuthContext();

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: "invisible"
      });
    }
  }, []);

  const handlePhoneLogin = async (e) => {
    e.preventDefault();

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await loginWithPhone(phone, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      toast.success('SMS sent! Please enter the verification code.');
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      await loginWithPhone(verificationId, verificationCode);
      toast.success('Phone number verified successfully!');
    } catch (error) {
      toast.error(`Verification failed: ${error.message}`);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success('Login successful!');
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Login successful!');
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email login */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-style"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-style"
          />
          <button type="submit" className="btn-style">Sign in with Email</button>
        </form>

        {/* Phone login */}
        {!verificationId ? (
          <form onSubmit={handlePhoneLogin}>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input-style"
            />
            <button type="submit" className="btn-style">Send Verification Code</button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode}>
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              className="input-style"
            />
            <button type="submit" className="btn-style">Verify Code</button>
          </form>
        )}

        <button onClick={handleGoogleLogin} className="btn-style google">
          Sign in with Google
        </button>

        <div id="recaptcha-container"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;