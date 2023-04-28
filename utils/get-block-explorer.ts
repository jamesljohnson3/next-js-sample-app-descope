import { Networks } from './networks';
import Cookies from 'js-cookie';

export const getBlockExplorer = () => {
  const network = Cookies.get('network');
  switch (network) {
    case Networks.Polygon:
      return 'https://mumbai.polygonscan.com/';
    case Networks.Optimism:
      return 'https://blockscout.com/optimism/goerli/';
    case Networks.Goerli:
      return 'https://goerli.etherscan.io/';
    default:
      return 'https://sepolia.etherscan.io/';
  }
};
