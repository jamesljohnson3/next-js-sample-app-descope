import React, { useEffect, useState } from 'react';
import Divider from '../ui/divider';
import FormButton from '../ui/form-button';
import Link from '../../images/link.svg';
import Spacer from '../ui/spacer';
import FormInput from '../ui/form-input';
import Card from '../ui/card2';
import CardHeader from '../ui/card-header';
import TransactionHistory from '../ui/transaction-history';
import ErrorText from '../ui/error';
import { Networks } from '../../utils/networks';
import { getFaucetUrl } from '../../utils/faucet';
import { useUser } from '../../contexts/UserContext';
import { useWeb3 } from '../../contexts/Web3Context';
import Cookies from 'js-cookie';

const SendTransaction = () => {
  const { user } = useUser();
  const { web3 } = useWeb3();
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(!toAddress || !amount);
  const [hash, setHash] = useState('');
  const [toAddressError, setToAddressError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const network = Cookies.get('network');
  const tokenSymbol = network === Networks.Polygon ? 'MATIC' : 'ETH';

  useEffect(() => {
    setDisabled(!toAddress || !amount);
    setAmountError(false);
    setToAddressError(false);
  }, [amount, toAddress]);

  const sendTransaction = () => {
    if (!web3.utils.isAddress(toAddress)) return setToAddressError(true);
    if (isNaN(Number(amount))) return setAmountError(true);
    setDisabled(true);
    const txnParams = {
      from: user,
      to: toAddress,
      value: web3.utils.toWei(amount, 'ether'),
      gas: 21000,
    };
    web3.eth
      .sendTransaction(txnParams as any)
      .on('transactionHash', (txHash: string) => {
        setHash(txHash);
        console.log('Transaction hash:', txHash);
      })
      .then((receipt: any) => {
        setToAddress('');
        setAmount('');
        console.log('Transaction receipt:', receipt);
      })
      .catch((error: any) => {
        console.error(error);
        setDisabled(false);
      });
  };

  return (
    <Card>
      <CardHeader id="send-transaction">Send Transaction</CardHeader>
      <a href={getFaucetUrl()} target="_blank" rel="noreferrer">
        <FormButton onClick={() => null} disabled={false}>
          Get Test {tokenSymbol} <img src={Link} alt="link-icon" style={{ marginLeft: '3px' }} />
        </FormButton>
      </a>
      <Divider />
      <FormInput
        value={toAddress}
        onChange={(e: any) => setToAddress(e.target.value)}
        placeholder="Receiving Address"
      />
      {toAddressError ? <ErrorText>Invalid address</ErrorText> : null}
      <FormInput
        value={amount}
        onChange={(e: any) => setAmount(e.target.value)}
        placeholder={`Amount (${tokenSymbol})`}
      />
      {amountError ? <ErrorText className="error">Invalid amount</ErrorText> : null}
      <FormButton onClick={sendTransaction} disabled={!toAddress || !amount || disabled}>
        Send Transaction
      </FormButton>

      {hash ? (
        <>
          <Spacer size={20} />
          <TransactionHistory />
        </>
      ) : null}
    </Card>
  );
};

export default SendTransaction;
