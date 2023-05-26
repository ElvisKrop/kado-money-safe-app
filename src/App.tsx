import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import getKadoNetworkForChainId from './utils/get-kado-network-for-chain-id'
import getProductsForKadoNetwork from './utils/get-products-for-kado-network'

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SafeKadoMoneyApp = (): React.ReactElement => {
  const { safe } = useSafeAppsSDK()
  const network = getKadoNetworkForChainId(safe.chainId)
  const products = getProductsForKadoNetwork(network)

  const params = useMemo(() => {
    return new URLSearchParams({
      apiKey: process.env.REACT_APP_KADO_WIDGET_API_KEY,
      onToLocked: '1', // looks like it doesn't work
      networkList: [network].join(','),
      onToAddress: safe.safeAddress,
      network,
      productList: products.join(','),
    })
  }, [network, products, safe.safeAddress])

  return (
    <Container>
      <iframe
        title="Kado Money Widget"
        src={`https://app.kado.money/?${params.toString()}`}
        width="500"
        height="686"
        frameBorder={0}
      />
    </Container>
  )
}

export default SafeKadoMoneyApp
