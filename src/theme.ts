// as named by
// https://figstyle.freighter.studio/styleguide/GhDWRZ9NJ3ddxQGJHlAtewiy/shadows,fonts,gradients,colors
export const colors = {
  black: '#000',
  white: '#fff',

  // grays

  // controls
  mineShaft: '#333333',

  // text
  suvaGray: '#8a8484',
  gray: '#828282',
  // skeletons silver: '#c4c4c4',
  suvaGrey2: '#8c8989',
  midGrey: '#5d5b59',

  // colors
  seagul: '#56ccf2',
  powderBlue: '#b9e6ea',
  halfBaked: 'rgba(133, 202, 213, 0.84)',
  tickleMePink: 'rgba(241, 123, 171, 0.52)',
  ripeLemon: 'rgba(251, 225, 49, 0.45)',
  overlay: 'rgba(12, 11, 11, 0.5)',
}

export default {
  fonts: {
    sans: '"Maven Pro", sans-serif',
  },

  fontWeights: {
    medium: 400,
    regular: 500,
  },

  colors,

  gradients: {
    main: `linear-gradient(180deg, ${colors.halfBaked} 15.47%, ${
      colors.tickleMePink
    } 58.01%, ${colors.ripeLemon} 97.79%)`,
  },
}
