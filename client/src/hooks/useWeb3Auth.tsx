"use client";

import { rariChain } from "@/assets/data/chains";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { FC, ReactNode } from "react";
import W3M from "web3modal";

interface Props {
	children: ReactNode;
}

const chains = [rariChain];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID!;

export const providerOptions = {
	coinbasewallet: {
		package: CoinbaseWalletSDK,
		options: {
			appName: "WAGMI Club",
			rpc: {
				1: `https://testnet.rpc.rarichain.org/http`,
			},
		},
	},
	walletconnect: {
		package: WalletConnect,
		options: {
			rpc: {
				1: `https://testnet.rpc.rarichain.org/http`,
			},
		},
	},
};

const metadata = {
	name: "WAGMI Club",
	description: "Club with the Magic Badge",
	url: "https://mywebsite.com",
	icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
	metadata,
	enableEmail: true,
	defaultChainId: 1,
	enableEIP6963: true,
	enableInjected: true,
	enableCoinbase: true,
});

createWeb3Modal({
	chains,
	projectId,
	ethersConfig,
	enableAnalytics: true,
	defaultChain: rariChain,
});

export const Web3Modal: FC<Props> = ({ children }) => {
	return children;
};

