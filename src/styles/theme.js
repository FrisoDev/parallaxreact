import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors

export const red          = '#222222'
export const amber        = '#FFC107'
export const errorColor   = '#FFC107'
export const darkRed      = '#C1272D'
export const white        = '#FFFFFF'
export const black        = '#3a3737'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(247, 249, 252, 0.5)'
export const grey30       = 'rgba(247, 249, 252, 0.7)'


// Palette
export const palette = {
  primary1Color: red,
  primary2Color: amber,
  errorColor: errorColor,

  titleColor: red,
  alternateTitleColor: white,

  subTitleColor: red,
  alternateSubTitleColor: white,

  textColor: black,
  alternateTextColor: amber,

  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30,

}

export const fontLibrary = {
  fontFamilyTitle: 'Roboto Slab',
  fontFamilySubTitle: "Lato",
  fontFamilyText: "Lato",
}

export default getMuiTheme({ palette })
