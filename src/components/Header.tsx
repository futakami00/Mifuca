import * as React from 'react'
import styled from '@emotion/styled'
import SiteNav from './SiteNav'
import SiteTitle from './SiteTitle'
import { defaultSkin } from '../layouts'

export const HeaderWrapper = styled.div<{ bg: string; color: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  background: ${props => props.bg};
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: relative;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${props => props.color};
  }
`

type HeaderProps = {
  title: string
} & typeof defaultSkin

const Header: React.FC<HeaderProps> = ({ title, skin }) => (
  <HeaderWrapper bg={skin.bg} color={skin.color}>
    <SiteTitle title={title} color={skin.color} />
    <SiteNav color={skin.color} />
  </HeaderWrapper>
)

export default Header
