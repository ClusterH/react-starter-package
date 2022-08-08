export interface ThemeProps {
  // color
  background1: string
  background2: string
  background3: string
  // text color
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  // status color
  success: string
  error: string
  // button color
  button1: string
  buttonHover1: string
  buttonDisabled: string
  divider: string
}

export type GlobalThemeProps = {
  theme: ThemeProps
}

// Flex Layout
export type TFlexDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type TFlexJustifyContents = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type TFlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
