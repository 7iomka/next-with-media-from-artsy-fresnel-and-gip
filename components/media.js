import { createMedia } from '@artsy/fresnel';

const AppMedia =  createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 900,
    lg: 1024,
    xl: 1192,
  },
  interactions: {
    hover: `not all and (hover:hover)`
  },
})

// Make styles for injection into the header of the page
const mediaStyles = AppMedia.createMediaStyle();

const { Media, MediaContextProvider } = AppMedia;

export { Media, MediaContextProvider, mediaStyles };
