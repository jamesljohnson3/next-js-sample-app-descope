import React, { useState } from 'react';
import DownArrow from '../../images/down-arrow.svg';
import Check from '../../images/check.svg';
import { Networks } from '../../utils/networks';
import Cookies from 'js-cookie';


const Network = () => {
  const networkOptions = [Networks.Sepolia, Networks.Goerli, Networks.Polygon, Networks.Optimism];
  const [isOpen, setIsOpen] = useState(false);
  const [network, setNetwork] = useState(Cookies.get('network') || Networks.Sepolia);

  const handleNetworkSelected = (networkOption: Networks) => {
    if (typeof window !== 'undefined') {
      location.reload();
    }
    
    if (networkOption !== network) {
      setNetwork(networkOption);
      Cookies.set('network', networkOption);
    }
  };

  const ActiveNetwork = ({ network }: { network: string }) => {
    return (
      <div className="active-network">
        {network}
        <img src={DownArrow} height="20px" alt="down-arrow" className={isOpen ? 'rotate' : ''} />
      </div>
    );
  };

  const NetworkDropdownOption = ({ network }: { network: Networks }) => {
    return (
      <div
        className="network-dropdown-option"
        onClick={() => {
          handleNetworkSelected(network);
        }}
      >
        <img src={Check} height="15px" alt="check" style={{ marginRight: '10px' }} />
        {network}
      </div>
    );
  };

  return (
    <div className="network-dropdown" onClick={() => setIsOpen(!isOpen)}>
      <ActiveNetwork network={network} />
      {isOpen ? (
        <div className="network-options">
          {networkOptions.map(networkOption => (
            <NetworkDropdownOption key={networkOption} network={networkOption} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Network;
