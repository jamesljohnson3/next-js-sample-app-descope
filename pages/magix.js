import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../libs/magic';
import { useUser } from '../contexts/UserContext';
import { useWeb3 } from '../contexts/Web3Context';

const Login = () => {
  const { user, setUser } = useUser();
  const { setWeb3 } = useWeb3();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    try {
      const email = event.target.email.value;
      await magic.auth.loginWithMagicLink({ email });
      const web3 = await magic.web3.getProvider();
      const address = web3.selectedAddress;
      setUser(address);
      setWeb3(web3);
      setIsLoggingIn(false);
      router.push('/');
    } catch (error) {
      console.error(error);
      setIsLoggingIn(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <button type="submit" disabled={isLoggingIn}>
        {isLoggingIn ? 'Logging in...' : 'Log in with Magic'}
      </button>
    </form>
  );
};

export default Login;
