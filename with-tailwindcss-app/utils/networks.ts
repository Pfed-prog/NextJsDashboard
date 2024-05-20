export function getNetworkNameTitle(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "Ethereum";
    case 10:
      return "Optimism";
    case 42161:
      return "Arbitrum One";
  }
  return "Ethereum";
}

export function getNetworkName(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "mainnet";
    case 10:
      return "optimism";
    case 42161:
      return "arbitrum";
  }
  return "mainnet";
}

export function getNetworkId(chainId?: string): number {
  switch (chainId) {
    case "mainnet":
      return 1;
    case "optimism":
      return 10;
    case "arbitrum":
      return 42161;
  }
  return 1;
}
