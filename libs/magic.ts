import { EthNetworkConfiguration, Magic } from 'magic-sdk';
import { Networks } from '../utils/networks';
import Cookies from 'js-cookie';

const formattedNetwork = (): EthNetworkConfiguration => {
  const network = Cookies.get('network') ;
  switch (network) {
    case Networks.Optimism:
      return {
        rpcUrl: process.env.REACT_APP_OPTIMISM_RPC_URL as string,
        chainId: 420,
      };
    case Networks.Polygon:
      return {
        rpcUrl: process.env.REACT_APP_POLYGON_RPC_URL as string,
        chainId: 80001,
      };
    case Networks.Goerli:
      return {
        rpcUrl: process.env.REACT_APP_GOERLI_RPC_URL as string,
        chainId: 5,
      };
    default:
      return {
        rpcUrl: process.env.REACT_APP_SEPOLIA_RPC_URL as string,
        chainId: 11155111,
      };
  }
};

export const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY as string, {
  network: formattedNetwork(),
});
