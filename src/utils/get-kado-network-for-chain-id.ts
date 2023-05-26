import KadoNetwork from '../constants/kado-network'

export default function getKadoNetworkForChainId(chainId: number) {
  switch (chainId) {
    case 1:
      return KadoNetwork.ETHEREUM
    case 137:
      return KadoNetwork.POLYGON
    case 42161:
      return KadoNetwork.ARBITRUM
    case 43114:
      return KadoNetwork.AVALANCHE
    case 10:
      return KadoNetwork.OPTIMISM
    case 100: // Gnosis Chain
    case 56: // BNB Smart Chain
    case 1313161554: // Aurora
    case 42220: // Celo
    case 84531: // Base Goerli Testnet
    case 5: // Goerli Testnet
      throw new Error(`${chainId} is not supported yet by Kado Money`)
    default:
      throw new Error(`Invalid chainId: ${chainId}`)
  }
}
