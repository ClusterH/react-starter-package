import React from 'react'

import { TiWarning } from 'react-icons/ti'

import { useActiveWeb3React } from 'hooks'
import { FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import { isMobile, isSupportedNetwork } from 'utils'

import { NETWORK_INDICATOR } from '../../config/web3Connect/web3'

const NetworkIndicator: React.FC = () => {
  const { chainId } = useActiveWeb3React()

  return (
    <FlexRow
      rowWidth={'fit-content'}
      backgroundColor={themeColor.background1}
      rowHeight={'38px'}
      padding={'0 12px'}
      margin={'0 12px 0 -23px'}
      borderRadius={themeBorderRadius.small}
      gap={'4px'}
    >
      {chainId && isSupportedNetwork(chainId) ? (
        <>
          <ImageContainer src={NETWORK_INDICATOR[chainId].icon} width={isMobile ? '10px' : '14px'} />
          <TextWrapper fontWeight={'bold'}>{NETWORK_INDICATOR[chainId].name}</TextWrapper>
        </>
      ) : (
        <>
          <TiWarning width={isMobile ? '10px' : '14px'} color={themeColor.error} />
          <TextWrapper fontWeight={'bold'} color={'error'}>
            {'Wrong Network'}
          </TextWrapper>
        </>
      )}
    </FlexRow>
  )
}

export default NetworkIndicator
