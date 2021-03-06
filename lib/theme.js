// docs/style-cookbook/media-queries.md
export const breakpoints = [ '30em', '60em' ]

// docs/style-cookbook/layout/spacing.md
export const space = [ 0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem' ]

// docs/style-cookbook/typography/type-scale.md
export const fontSizes = [ '.75rem', '.875rem', '1rem', '1.25rem', '1.5rem', '2.25rem', '3rem', '5rem', '6rem' ]
fontSizes.subheadline = fontSizes[ 7 ]
fontSizes.headline = fontSizes[ 8 ]

// docs/style-cookbook/themed/border-radii.md
export const radii = [ '0', '.125rem', '.25rem', '.5rem', '1rem' ]
radii.pill = '9999px'
radii.max = '100%'

export const shadows = [
  '0px 0px 2px 0px rgba(0, 0, 0, 0.2)', // 0
  '0px 0px 4px 2px rgba(0, 0, 0, 0.2)', // 1
  '0px 0px 8px 2px rgba(0, 0, 0, 0.2)', // 2
  '2px 2px 4px 2px rgba(0, 0, 0, 0.2)', // 3
  '2px 2px 8px 0px rgba(0, 0, 0, 0.2)', // 4
  '4px 4px 8px 0px rgba(0, 0, 0, 0.2)' // 4
]

// docs/style-cookbook/themed/colors.md
export const colors = {
  // Grayscale Solids
  black: '#000',
  nearBlack: '#111',
  darkGray: '#333',
  midGray: '#555',
  gray: '#777',
  silver: '#999',
  lightSilver: '#aaa',
  moonGray: '#ccc',
  lightGray: '#eee',
  nearWhite: '#f4f4f4',
  white: '#fff',

  // Grayscale Transparencies
  transparent: 'transparent',
  black90: 'rgba(0,0,0,.9)',
  black80: 'rgba(0,0,0,.8)',
  black70: 'rgba(0,0,0,.7)',
  black60: 'rgba(0,0,0,.6)',
  black50: 'rgba(0,0,0,.5)',
  black40: 'rgba(0,0,0,.4)',
  black30: 'rgba(0,0,0,.3)',
  black20: 'rgba(0,0,0,.2)',
  black10: 'rgba(0,0,0,.1)',
  black05: 'rgba(0,0,0,.05)',
  black025: 'rgba(0,0,0,.025)',
  black0125: 'rgba(0,0,0,.0125)',
  white90: 'rgba(255,255,255,.9)',
  white80: 'rgba(255,255,255,.8)',
  white70: 'rgba(255,255,255,.7)',
  white60: 'rgba(255,255,255,.6)',
  white50: 'rgba(255,255,255,.5)',
  white40: 'rgba(255,255,255,.4)',
  white30: 'rgba(255,255,255,.3)',
  white20: 'rgba(255,255,255,.2)',
  white10: 'rgba(255,255,255,.1)',
  white05: 'rgba(255,255,255,.05)',
  white025: 'rgba(255,255,255,.025)',
  white0125: 'rgba(255,255,255,.0125)',

  // Colors
  darkRed: '#e7040f',
  red: '#ff4136',
  lightRed: '#ff725c',
  orange: '#ff6300',
  gold: '#ffb700',
  yellow: '#ffd700',
  lightYellow: '#fbf1a9',
  purple: '#5e2ca5',
  lightPurple: '#a463f2',
  darkPink: '#d5008f',
  hotPink: '#ff41b4',
  pink: '#ff80cc',
  lightPink: '#ffa3d7',
  darkGreen: '#137752',
  green: '#19a974',
  lightGreen: '#9eebcf',
  navy: '#001b44',
  darkBlue: '#00449e',
  blue: '#357edd',
  lightBlue: '#96ccff',
  lightestBlue: '#cdecff',
  washedBlue: '#f6fffe',
  washedGreen: '#e8fdf5',
  washedYellow: '#fffceb',
  washedRed: '#ffdfdf'
}

export const opacities = {
  0: '0',
  '2.5': '.25',
  5: '.05',
  10: '.1',
  20: '.2',
  30: '.3',
  40: '.4',
  50: '.5',
  60: '.6',
  70: '.7',
  80: '.8',
  90: '.9',
  100: '1'
}
