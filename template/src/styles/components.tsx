import { CgClose } from 'react-icons/cg'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components/macro'

import {
  themeBorderRadius,
  themeBorders,
  themeBreakPoint,
  themeColor,
  themeFontFamily,
  themeFontWeight,
  themeGradient,
  themeTypography,
} from './theme'
import { TFlexAlignItems, TFlexJustifyContents, ThemeProps } from './types'

export const getWidthString = (span: number) => {
  if (!span) return

  const width = (100 * span) / 12
  return `width: ${width}%;`
}
export const FlexRow = styled.div<{
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  gap?: string
  padding?: string
  margin?: string
  rowWidth?: string
  rowHeight?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  isWrap?: boolean
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '12px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ rowWidth }) => (rowWidth ? rowWidth : '100%')};
  height: ${({ rowHeight }) => (rowHeight ? rowHeight : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  border: ${({ border }) => (border ? border : 'none')};
`
export const FlexColumn = styled.div<{
  justifyContent?: TFlexAlignItems | TFlexJustifyContents
  alignItems?: TFlexJustifyContents
  gap?: string
  padding?: string
  margin?: string
  colWidth?: string
  colHeight?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '12px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ colWidth }) => (colWidth ? colWidth : '100%')};
  height: ${({ colHeight }) => (colHeight ? colHeight : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  border: ${({ border }) => (border ? border : 'none')};

  // ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and ${themeBreakPoint.sm} {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and ${themeBreakPoint.md} {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and ${themeBreakPoint.lg} {
    ${({ lg }) => lg && getWidthString(lg)};
  }
  @media only screen and ${themeBreakPoint.sm} {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`
export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  @media only screen and ${themeBreakPoint.lg} {
    padding: 0 32px;
  }
`
export const TextWrapper = styled.span<{
  color?: keyof ThemeProps
  fontSize?: keyof typeof themeTypography
  fontWeight?: keyof typeof themeFontWeight
  fontFamily?: keyof typeof themeFontFamily
  fontStyle?: 'normal' | 'italic' | 'oblique'
  lineHeight?: string
  opacity?: number
  textAlign?: string
  margin?: string
  letterSpacing?: string
  whiteSpace?: string
}>`
  color: ${({ color }) => (color ? themeColor[color] : themeColor.text1)};
  font-size: ${({ fontSize }) => (fontSize ? themeTypography[fontSize] : themeTypography.base)};
  font-weight: ${({ fontWeight }) => (fontWeight ? themeFontWeight[fontWeight] : themeFontWeight.medium)};
  font-family: ${({ fontFamily }) => (fontFamily ? themeFontFamily[fontFamily] : themeFontFamily.main)};
  font-style: ${({ fontStyle }) => fontStyle ?? 'normal'};
  line-height: ${({ lineHeight }) => lineHeight ?? '120%'};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  transition: ease-in-out 0.3s;
  margin: ${({ margin }) => margin ?? '0px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? '1px'};
  white-space: ${({ whiteSpace }) => whiteSpace ?? 'normal'};
`
export const HoverTextWrapper = styled(TextWrapper)`
  cursor: pointer;
  &:hover {
    color: ${themeColor.text3};
  }
`
export const GradientTextWrapper = styled(TextWrapper)`
  background: ${themeGradient.textGradient1};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`
export const BackwardTextWrapper = styled(TextWrapper)`
  transform: matrix(-1, 0, 0, 1, 0, 0);
`
export const MainButton = styled.button<{
  width?: string
  height?: string
  padding?: string
  color?: string
  hoverColor?: string
  borderRadius?: string
  backgroundColor?: string
  margin?: string
}>`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  color: ${({ color }) => (color ? color : themeColor.text1)};
  font-size: ${themeTypography.sm};
  font-weight: ${themeFontWeight.semiBold};
  font-family: 'Poppins';
  line-height: 24px;
  text-align: center;
  padding: ${({ padding }) => padding ?? '0 24px'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : themeColor.button1)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.small)};

  &:hover {
    background: ${({ hoverColor }) => (hoverColor ? hoverColor : themeColor.buttonHover1)};
  }

  &:disabled {
    background: ${themeColor.buttonDisabled};
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }

  @media only screen and (max-width: 900px) {
    font-size: ${themeTypography.base};
  }
`
export const TransparentButton = styled(MainButton)`
  color: ${({ color }) => (color ? color : themeColor.text1)};
  background: transparent;
  outline: 1px solid ${themeColor.text1};
`
export const GradientButton = styled(MainButton)<{ gradient?: string }>`
  background: ${({ gradient }) => gradient ?? themeGradient.buttonGradient};
`
export const CloseButton = styled(CgClose)`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`
export const CloseIconWrapper = styled(CloseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const InputWrapper = styled.input<{
  width?: string
  height?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  color?: keyof ThemeProps
  padding?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: number
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border: ${({ border }) => (border ? border : themeBorders.border1)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.small)};
  padding: ${({ padding }) => (padding ? padding : '0px 20px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : themeTypography.base)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : themeFontWeight.regular)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : themeFontFamily.main)};
  color: ${({ color }) => (color ? themeColor[color] : themeColor.text1)};
  outline: none;
`
export const ImageContainer = styled.img<{
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  margin?: string
  objectFit?: string
  borderRadius?: string
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
}>`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : 'cover')};
  position: ${({ position }) => (position ? position : 'unset')};
  top: ${({ top }) => (top ? top : 'unset')};
  left: ${({ left }) => (left ? left : 'unset')};
  right: ${({ right }) => (right ? right : 'unset')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'unset')};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`
export const Divider = styled.div<{ width?: string; height?: string; margin?: string; backColor?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '2px')};
  background-color: ${({ backColor }) => (backColor ? backColor : themeColor.divider)};
  margin: ${({ margin }) => (margin ? margin : '1rem 0')};
`
export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background-color: #000000;
  opacity: 0.7;
  z-index: 1;
`

export const ToastWrapper = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})``
