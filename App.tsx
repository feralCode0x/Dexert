import React from 'react'
import { useCallback, useRef, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget, Theme } from '@uniswap/widgets'
// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
import { useActiveProvider } from './connectors/index'
import { JSON_RPC_URL } from './constants'
import Web3Connectors from './connectors/Web3Connectors'
import styles from './styles/Home.module.css'
import vanillaLogo from "./assets/vanillaLogo.png";
import coffeLogo from "./assets/coffeLogo.png";
import smoothyLogo from "./assets/smoothyLogo.png";
import iceLogo from "./assets/iceLogo.png";

const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'


const theme: Theme = {
  primary: '#000',
  secondary: '#5F7D52',
  interactive: '#CBD6BA',
  container: '#ffe800',
  module: '#FFF',
  accent: '#8E8B78',
  outline: '#CADDC2',
  dialog: '#FFF',
  fontFamily: 'Roboto',
  borderRadius: 0.8,
}
export default function App() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null);
  const focusConnectors = useCallback(() => connectors.current?.focus(),[])
  
  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])
  const feeReceipient = '0x0bC9C47Db51217839dDb5D69085CD8cFbD4A5cCA'
  
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.i18n}>
        <label style={{ display: 'flex' }}>
          <FiGlobe />
        </label>
        <select onChange={onSelectLocale}>
          {SUPPORTED_LOCALES.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </div>
      <img
            src={iceLogo}
            alt="dexert-logo"
            className={styles.logo}
          />
<h1 className={styles.title}>Dexert</h1></div>
        <div className={styles.connectors} ref={connectors} tabIndex={-1}>
            <Web3Connectors />
          </div>

          <div className={styles.widget}>
          <div className="Uniswap">
            <SwapWidget theme={theme}
              jsonRpcUrlMap={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              locale={locale}
              convenienceFee={100}
              convenienceFeeRecipient={feeReceipient}
              onConnectWalletClick={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="0"
              defaultOutputTokenAddress={UNI}
            />
            </div>
          </div>
    </div> 
  )
}