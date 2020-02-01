import * as React from 'react'
import styled from '@emotion/styled'

const MainWrapper = styled.div`
  @media (min-width: calc(${props => props.theme.breakpoints.md} + 1px)) {
    grid-column-start: 2;
  }
`

interface MainContainerProps {
  className?: string
}

const LayoutMain: React.FC<MainContainerProps> = ({ children, className }) => (
  <MainWrapper className={className}>
    <main>{children}</main>
  </MainWrapper>
)

export default LayoutMain
