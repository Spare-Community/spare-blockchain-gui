import type { Wallet } from '@spare/api';
import { WalletType } from '@spare/api';
import { mojoToCATLocaleString, mojoToChiaLocaleString } from '@spare/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToChiaLocaleString(value);
}
