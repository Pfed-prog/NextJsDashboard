import { Provider, Signer, Contract } from "ethers";

export type Project = {
  name: string;
  logoPath: string;
  description?: string;
  contracts: Array<Contract>;
};

export type LocalContract = {
  name: string;
  abi: string;
  addresses: Array<Address>;
};

export type FullContractWrapper = {
  name: string;
  abi: string;
  address: `0x${string}`;
  availableAddresses: Array<Address>;
  provider?: Signer | Provider;
  ethersContract: Contract;
};

export type Address = {
  address: string;
  network: "mainnet" | "optimism" | "goerli";
};

export type Transaction = {
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  hash: string;
  timestamp: number;
  value: number;
};
