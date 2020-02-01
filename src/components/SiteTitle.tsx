import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const SiteTitlInner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.sidebarWidth.big};
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.theme.sidebarWidth.normal};
    h1 {
      font-size: 1.75rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: relative;
  }
`

const HomepageLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
  color: string
}

const SiteTitle: React.FC<HeaderProps> = ({ title, color }) => (
  <SiteTitlInner>
    <HomepageLink to="/blog" color={color}>
      <h1>{title}</h1>
    </HomepageLink>
  </SiteTitlInner>
)

export default SiteTitle
