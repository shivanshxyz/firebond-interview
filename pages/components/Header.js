import { ConnectWallet } from "@thirdweb-dev/react"
export default function Header() {
    return (
        <nav className="bg-gray-800 flex justify-between items-center h-20 p-4">
            <p className="text-yellow-50 ml-4 font-semibold text-2xl">Firebond Interview</p>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
        </nav>
    )
}