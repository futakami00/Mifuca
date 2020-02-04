interface ThemeShape {
  breakpoints: {
    [key: string]: string
  }
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
  widths: {
    [key: string]: string
  }
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  fontSizes: ['0.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.488rem'],
  colors: {
    primary: '#15b0c2',
    secondary: '#494992',
    grey: '#58545a',
    shade: '#f5f5f5'
  },
  widths: {
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem'
  ],
  fontWeights: {
    normal: 400,
    bold: 700
  },
  sidebarWidth: {
    big: '250px',
    normal: '200px'
  }
}

/* eslint-disable max-len */

export const skins = {
  blog: {
    bg: '#bae9c7',
    color: '#461b3a'
  },
  post: {
    bg: '#faeee7',
    color: '#594a4e'
  },
  about: {
    bg: '#dcaac8',
    color: '#fff'
  },
  works: {
    bg: 'linear-gradient(to right, #753a88, #cc2b5e)',
    color: '#fff'
  },
  notFound: {
    bg: '#f5c42b',
    color: '#2a346b'
  }
}

export const colors = {
  brand: '#663399',
  lilac: '#9d7cbf',
  accent: '#ffb238',
  success: '#37b635',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#fff',
  black: '#000'
}

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5
}

export const heights = {
  header: 60
}

export default theme
