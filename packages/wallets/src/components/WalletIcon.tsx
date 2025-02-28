import React from 'react';
import { useCurrencyCode } from '@spare/core';
import styled from 'styled-components';
import { useGetCatListQuery } from '@spare/api-react';
import { WalletType, type Wallet } from '@spare/api';
import { Typography } from '@material-ui/core';

const StyledSymbol = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
`;

type Props = {
  wallet: Wallet;
};

export default function WalletIcon(props: Props) {
  const { wallet } = props;
  const { data: catList = [], isLoading } = useGetCatListQuery();
  const currencyCode = useCurrencyCode();

  if (wallet.type === WalletType.STANDARD_WALLET) {
    return <StyledSymbol color="primary">{currencyCode}</StyledSymbol>;
  }

  if (!isLoading && wallet.type === WalletType.CAT) {
    const token = catList.find((token) => token.assetId === wallet.meta?.assetId);
    if (token) {
      return <StyledSymbol color="primary">{token.symbol}</StyledSymbol>;
    }
  }

  return null;
}
