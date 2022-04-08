import { useGetSyncStatusQuery } from '@spare/api-react';
import { SyncingStatus } from '@spare/api';
import getWalletSyncingStatus from '../utils/getWalletSyncingStatus';

export default function useWalletState(): {
  isLoading: boolean;
  state?: SyncingStatus;
} {
  const { data: walletState, isLoading } = useGetSyncStatusQuery();

  return {
    isLoading,
    state: walletState && getWalletSyncingStatus(walletState),
  }
}
