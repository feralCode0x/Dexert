import { initializeConnector } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import { Buffer } from 'buffer'
// eslint-disable-next-line
import { JSON_RPC_URL } from '../constants'
import { toWeb3Connector } from './utils'

// WalletConnect relies on Buffer, so it must be polyfilled.
if (!window.Buffer) {
  window.Buffer = Buffer
}

export function isWalletConnect(connector: Connector) {
  return connector instanceof WalletConnectV2
} 

const connector = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
      projectId: 'JSON_RPC_URL',
      chains: [1],
      showQrModal: false,
        },
    })
)
export default toWeb3Connector(connector)