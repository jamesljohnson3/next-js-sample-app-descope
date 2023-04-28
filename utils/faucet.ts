import { Networks } from './networks';
import Cookies from 'js-cookie';

export const getFaucetUrl = () => {
  const network = Cookies.get('network');
  switch (network) {
    case Networks.Polygon:
      return 'https://faucet.polygon.technology/';
    case Networks.Optimism:
      return 'https://community.optimism.io/docs/useful-tools/faucets/';
    case Networks.Goerli:
      return 'https://goerlifaucet.com/';
    default:
      return 'https://sepoliafaucet.com/';
  }
};
