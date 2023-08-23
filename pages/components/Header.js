import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"
export default function Header() {
    return (
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-brightness-70 backdrop-blur-2xl drop-shadow-2xl bg-opacity-30 border-b border-gray-200 px-2">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <span className="text-2xl text-white font-bold drop-shadow-2xl">
                ERC20 Dapp
              </span>
            </Link>
            <div className="flex space-x-4 text-gray-900">
              <ConnectWallet
                className="text-black bg-white font-medium rounded-lg px-3 py-2.5 text-center mb-2 mt-2"
                theme="light"
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    );
}