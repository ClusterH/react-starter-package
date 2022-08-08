import { ThemeProps } from './types'

export const themeColor: ThemeProps = {
  // background color
  background1: 'var(--cinder)',
  background2: 'var(--black)',
  background3: 'var(--darkBlue)',
  // text color
  text1: 'var(--white)',
  text2: 'var(--osloGrey)',
  text3: 'var(--skyBlue)',
  text4: 'var(--lightBlue)',
  text5: 'var(--dullOrange)',
  // status color
  success: 'var(--success)',
  error: 'var(--error)',
  // button color
  button1: 'var(--buttonColor1)',
  buttonHover1: 'var(--buttonHoverColor1)',
  buttonDisabled: 'var(--disable)',
  divider: 'var(--darkGrey)',
}

export const themeGradient = {
  buttonGradient: 'linear-gradient(234.14deg, var(--neonBlue) 5.28%, var(--purple) 91.61%)',
  textGradient1: 'linear-gradient(91.79deg, var(--white) 38.4%, rgba(255, 255, 255, 0.2) 102.58%);',
  textGradient2: 'linear-gradient(90.64deg, #FAE98B -2.3%, #F7A668 117.54%)',
  bgGradient1: 'linear-gradient(180deg, #212121 0%, #232323 100%)',
  bgGradient2: 'linear-gradient(180deg, var(--dune) 0%, var(--cinder) 100%)',
  bgGradient3: 'linear-gradient(124.64deg, #FBF08F 7.13%, #F79962 105.25%)',
}

export const themeBoxShadow = {
  boxShadow1: '0px 4px 8px rgba(0, 0, 0, 0.25)',
}

export const themeBorders = {
  border1: '1px solid var(--darkGrey)',
  border2: '1px solid var(--skyBlue)',
}

export const themeSize = {
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1440,
}

export const themeBreakPoint = {
  xs: `(max-width: ${themeSize.xs}px)`,
  sm: `(max-width: ${themeSize.sm}px)`,
  md: `(max-width: ${themeSize.md}px)`,
  lg: `(max-width: ${themeSize.lg}px)`,
  xl: `(max-width: ${themeSize.xl}px)`,
}

export const themeTypography = {
  xs: 'var(--xs)', // 12
  sm: 'var(--sm)', // 14
  base: 'var(--base)', // 16
  lg: 'var(--lg)', // 20
  xl: 'var(--xl)', // 22,
  xxl: 'var(--xxl)', // 24
  xxxl: 'var(--xxxl)', // 32
  extra: 'var(--extra)', // 48
}

export const themeFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

export const themeFontFamily = {
  title: 'SFPro',
  main: 'Poppins',
}

export const themeBorderRadius = {
  none: '0px',
  small: '12px',
  regular: '24px',
  medium: '32px',
  circle: '50%',
}

export enum Z_INDEX {
  fixed = 1030,
  modalBackdrop = 1040,
  modal = 1050,
  tooltip = 1080,
}

export const clampFontSizeBuilder = (minWidthPx: number, maxWidthPx: number, minFontSize: number, maxFontSize: number) => {
  const root = document.querySelector('html')
  const pixelsPerRem = root ? Number(getComputedStyle(root).fontSize.slice(0, -2)) : 16

  const minWidth = minWidthPx / pixelsPerRem
  const maxWidth = maxWidthPx / pixelsPerRem

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`
}
