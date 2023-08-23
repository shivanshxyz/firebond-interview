import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ThirdwebSDKProvider } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import '../styles/globals.css';
import Header from "./components/Header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
	return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <div className="max-h-full bg-gradient-to-r from-pink-400 to-pink-600">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
