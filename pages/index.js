import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
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
              <div className="mt-20 lg:mt-40 lg:ml-16 text-left">
                <div className=" text-6xl font-semibold text-gray-900 leading-none">
                  Deploy you own ERC20 drops
                </div>
                <button
                  onClick={() => router.push("/create")}
                  className="mt-12 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Deploy your own token
                </button>
              </div>
              <div className="mt-12 lg:mt-32 lg:ml-20 text-left"> </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
