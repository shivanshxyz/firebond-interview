import styles from "../styles/Home.module.css";
import { useAddress, useSDK, Web3Button } from "@thirdweb-dev/react";
import { userAgent } from "next/server";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateToken() {
    const router = useRouter();
    const address = useAddress();
    const sdk = useSDK();


    async function deployContract(name, symbol, desc) {
        if (!address || !sdk) {
          return;
        }
        
        // Deploy the smart contract
        const contractAddress = await sdk.deployer.deployBuiltInContract(
          "token-drop",
          {
            name: name,
            symbol: symbol,
            primary_sale_recipient: address,
            voting_token_address: address,
            description: desc,
          }
        );

        const contract = await sdk.getContract(contractAddress);


        // Set claim conditions
        const txResult = await contract.erc20.claimConditions.set([
            {
              price: 0, // The price of the token in the currency specified above
              maxClaimablePerWallet: 5, // The maximum number of tokens a wallet can claim
              maxClaimableSupply: 100, // The total number of tokens that can be claimed
              startTime: new Date(),
            },
          ]);
    
        // This is the contract address of the contract you just deployed
        console.log(contractAddress);
    
        alert(`Succesfully deployed token drop at ${contractAddress}`);
    
        router.push(`/claim/${contractAddress}`);
    }

    const [formd, setFormd] = useState({
      name:"",symbol:"",desc:""
    })

    let name, value;

    const handleInputs = (e) => {
      name = e.target.name
      value = e.target.value

      setFormd({...formd, [name]:value})
    }

    const tname = formd.name;
    const tsymbol = formd.symbol;
    const tdesc = formd.symbol;



    return (
      <main className={styles.main}>
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
                <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-72 text-left">
                  <form className="space-y-6" action="#">
                    <h5 className="text-3xl font-medium text-gray-900">
                      Create your own ERC20 token
                    </h5>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Token Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="tname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formd.name}
                        onChange={handleInputs}
                        placeholder="Token Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="symbol"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Token Symbol
                      </label>
                      <input
                        type="text"
                        name="symbol"
                        id="symbol"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formd.symbol}
                        onChange={handleInputs}
                        placeholder="Token Symbol"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="block mb-2 text-md font-medium text-gray-900"
                      >
                        Token description
                      </label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formd.desc}
                        onChange={handleInputs}
                        placeholder="Token description"
                      />
                    </div>
                    <div className="flex items-start"></div>
                  </form>
                  <button
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => {
                      deployContract(tname, tsymbol, tdesc);
                    }}
                  >
                    Deploy Token
                  </button>
                </div>
                <div className="mt-12 lg:mt-32 lg:ml-20 text-left"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}