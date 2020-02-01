import * as React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import globalStyle from '../styles/globalStyle'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={() => css(globalStyle)} />
      {children}
    </>
  </ThemeProvider>
)

export default LayoutRoot
