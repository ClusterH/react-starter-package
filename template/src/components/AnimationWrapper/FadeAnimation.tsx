import React, { useEffect, useState } from 'react'

import styled from 'styled-components/macro'

import { fadeInAnimation, fadeOutAnimation } from 'styles/animations'

const Wrapper = styled.div<{ isFadeIn: boolean }>`
  position: absolute;
  width: inherit;
  z-index: 9;
  ${({ isFadeIn }) => (isFadeIn ? fadeInAnimation : fadeOutAnimation)};
`

const Fade: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(true)
  useEffect(() => {
    return () => {
      setIsFadeIn(false)
    }
  }, [])
  return <Wrapper isFadeIn={isFadeIn}>{children}</Wrapper>
}

export default Fade
