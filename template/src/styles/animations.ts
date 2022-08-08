import { css, keyframes } from 'styled-components/macro'

const fadeInFrame = keyframes`
  0% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`
const fadeOutFrame = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const fadeInAnimation = css`
  animation: ${fadeInFrame} 0.3s ease-in-out;
`
export const fadeOutAnimation = css`
  animation: ${fadeOutFrame} 0.3s ease-in-out;
`
