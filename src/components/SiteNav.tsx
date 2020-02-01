import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: ${props => props.theme.sidebarWidth.big};
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex: 1;
    margin-top: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
  }
`

const MenuItem = styled.li`
  margin-bottom: ${props => props.theme.space[4]};
  font-size: 1.1rem;
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSizes[1]};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: auto 0.75rem auto 0;
    padding-top: 10px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 0.5rem 0.5rem;
    padding: 0;
    font-size: ${props => props.theme.fontSizes[0]};
  }
`

const MenuLink = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  line-height: 1.5;
  letter-spacing: 0.3rem;
  font-weight: 400;
  color: ${props => props.color};
  &::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  &:focus::after,
  &:hover::after {
    transform: scale(1, 1);
  }
`

interface NavProps {
  color: string
}

const SiteNav: React.FC<NavProps> = ({ color }) => (
  <Nav>
    <MenuList>
      <MenuItem>
        <MenuLink to="/" color={color}>
          TOP
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/blog/" color={color}>
          BLOG
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/about/" color={color}>
          ABOUT
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/works/" color={color}>
          WORKS
        </MenuLink>
      </MenuItem>
    </MenuList>
  </Nav>
)

export default SiteNav
