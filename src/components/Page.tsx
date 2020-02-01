import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  max-width: ${props => props.theme.widths.xl};
  margin: 0 auto;
  padding: ${dimensions.containerPadding}rem;
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: ${props => props.theme.widths.lg};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0;
    width: 100%;
  }
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
