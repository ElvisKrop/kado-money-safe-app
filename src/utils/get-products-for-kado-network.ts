import KadoNetwork from '../constants/kado-network'
import KadoProduct from '../constants/kado-product'

export default function getProductsForKadoNetwork(kadoNetwork: KadoNetwork) {
  if ([KadoNetwork.ARBITRUM, KadoNetwork.POLYGON, KadoNetwork.OPTIMISM].some((value) => kadoNetwork === value)) {
    return [KadoProduct.BUY, KadoProduct.SWAP]
  }

  return [KadoProduct.BUY, KadoProduct.SELL, KadoProduct.SWAP]
}
