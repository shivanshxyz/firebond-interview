import { useRouter } from "next/router";
import { useBalance, useTokenBalance, useTokenSupply, useClaimToken, useContract, useAddress, Web3Button } from "@thirdweb-dev/react";


export default function ClaimToken() {
    const router = useRouter();
    const tokenAddress = router.query.claim_token
    const address = useAddress() // getting the currently connected wallet address

    const { contract } = useContract(tokenAddress); // Connect to the token contract
    const {data} = useTokenBalance(contract, address)
    const { mutateAsync: claimToken } = useClaimToken(contract);
    const { data: totalMinted } = useTokenSupply(contract);

    return (
      <main>
        <div className="min-h-screen min-w-full flex flex-col justify-center p-10">
          <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl">
              <div className="flex items-center justify-start pt-6 pl-6">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              </div>

              <div className="px-20 py-6">
                <div className=" text-center">
                  <ul className="text-xl text-gray-900 leading-none">
                    <br />
                    <li>
                      <b>Token Name -</b> {data?.name}
                    </li>{" "}
                    <br />
                    <li>
                      <b>Token Address -</b> {tokenAddress}
                    </li>{" "}
                    <br />
                    <li>
                      <b>Symbol -</b> {data?.symbol}
                    </li>{" "}
                    <br />
                    <li>
                      <b>Decimals -</b> {data?.decimals}
                    </li>{" "}
                    <br />
                    <li>
                      <b>Total ${data?.name} minted till now -</b>{" "}
                      {totalMinted?.displayValue}
                    </li>{" "}
                    <br />
                    <li>
                      <b>${data?.name} balance in your wallet -</b>{" "}
                      {data?.displayValue}
                    </li>{" "}
                    <br />
                  </ul>

                  <Web3Button
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                    contractAddress={tokenAddress}
                    action={() =>
                      claimToken({
                        to: address,
                        amount: 5,
                      })
                    }
                  >
                    Claim 5 Tokens
                  </Web3Button>
                </div>
                <div className="mt-12 lg:mt-32 lg:ml-20 text-left"> </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}