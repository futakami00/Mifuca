import * as React from 'react'
import styled from '@emotion/styled'
import { defaultSkin } from '../layouts'

const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  background: ${props => props.color};
  color: white;
  bottom: 0;
  min-height: 10vh;
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`
const FooterInner = styled.div`
  margin: auto;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]};
  text-align: center;
  color: ${props => props.color};
`
type FooterProps = typeof defaultSkin

const Footer: React.FC<FooterProps> = ({ skin }) => (
  <FooterWrapper color={skin.bg}>
    <FooterInner color={skin.color}>
      <div>© Mifuca.net. {new Date().getFullYear()} All rights reserved.</div>
    </FooterInner>
  </FooterWrapper>
)

export default Footer
