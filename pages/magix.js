import { useState } from 'react';
import { Magic } from '@magic-sdk/react-native';
import AppHeader from '../components/app-header';
import Links from '../components/links';
import Network from '../components/network';
import ConnectButton from '../components/ui/connect-button';
import Spacer from '../components/ui/spacer';
import LoginPageBackground from '../images/login.svg';
import { useUser } from '../contexts/UserContext';
import { getWeb3 } from '../libs/web3';
import Cookies from 'js-cookie';

const Login = () => {
  const { setUser } = useUser();
  const [disabled, setDisabled] = useState(false);

  const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY);

  const connect = async () => {
    try {
      setDisabled(true);
      await magic.auth.loginWithPopup();
      setDisabled(false);
      const address = await magic.eth.getAccounts();
      console.log('Logged in user:', address);
      Cookies.set('user', address[0]);

      // Once user is logged in, initialize web3 instance to use the new provider (if connected with third party wallet)
      const web3 = await getWeb3();
      setUser(address[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };
  

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${LoginPageBackground})`,
      }}
    >
      <AppHeader />
      <Spacer size={30} />
      <Network />
      <Spacer size={20} />
      <ConnectButton onClick={connect} disabled={disabled} />
      <Links footer />
    </div>
  );
};

export default Login;
