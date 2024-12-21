"use client";
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { client, mantleAddress } from "./client";
import NFTClaimer from "./components/NFTClaimer";

export default function Home() {
  const account = useActiveAccount();

  const flowContract = getContract({
    client: client,
    chain: defineChain(545),
    address: mantleAddress,
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 cursor-pointer">
        Buy your Favourite
          <br />
           <span className="text-blue-700" >MEME NFTs</span>
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
          theme={lightTheme()}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={flowContract}
          tokenId={0n}
        />
        </div>
      </div>
    </main>
  );
}