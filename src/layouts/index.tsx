/* eslint-disable prettier/prettier */
import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${theme.sidebarWidth.big} 1fr;
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: ${theme.sidebarWidth.normal} 1fr;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

export const defaultSkin = {
  skin: {
    bg: '#fff',
    color: '#333'
  }
}

type LayoutProps = {
  children: React.ReactNode,
  className?: string
} & typeof defaultSkin

type defaultLayoutProps = { children: React.ReactNode } & {
  skin?: {
    bg: string
    color: string
  }
}

const IndexLayout: React.FC<LayoutProps> = ({ className, children, skin }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
          link={[{ href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto&display=swap', rel: 'stylesheet' }]}
        />
        <Wrapper className={className}>
          <Header
            title={data.site.siteMetadata.title}
            skin={skin}
          />
          <LayoutMain>
            {children}
          </LayoutMain>
          <Footer skin={skin}/>
        </Wrapper>
      </LayoutRoot>
    )}
  />
)

IndexLayout.defaultProps = defaultSkin

export default IndexLayout as React.FC<defaultLayoutProps>
