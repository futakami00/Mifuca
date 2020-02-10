import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { skins } from '../styles/theme'

const Content = styled.div`
  max-width: 50rem;
  margin: auto;
  padding: 3rem;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 2rem 1.25rem;
  }
`

const Section = styled.section`
  h2 {
    text-align: center;
    border-top: solid 2px;
    border-bottom: solid 1px;
    margin: 2.5rem auto;
    padding: 0.5rem;
  }
  h3 {
    border-bottom: solid 2px;
    margin: 2rem 0 1.5rem;
    padding-left: 0.75rem;
  }
  h4 {
    border-left: solid 6px #ddd;
    margin: 2rem 0 1rem;
  }
  a {
    color: ${props => props.theme.colors.primary};
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const Return = styled(Link)`
  display: block;
  margin-right: 1.25rem;
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  text-align: right;
  text-decoration: none;
`

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout skin={skins.post}>
    <Page>
      <Content>
        <Section>
          <time>{data.markdownRemark.frontmatter.date}</time>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Section>
      </Content>
      <Return to="/blog">＜＜ 記事一覧に戻る</Return>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`
