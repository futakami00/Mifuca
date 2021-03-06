import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import PostCard from '../components/PostCard'
import theme, { skins } from '../styles/theme'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  width: 80%;
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: 1.25rem;
  }
`

type BlogPageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            date: string
            tag: string
          }
          fields: {
            slug: string
          }
          excerpt?: string
        }
      }>
    }
  }
}

const PageTitleTop = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: #bae9c7;
  border-bottom: double 4px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`

export const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <IndexLayout skin={skins.blog}>
      <Page>
        <PostWrapper>
          <PageTitleTop>Latest Articles</PageTitleTop>
          <div>
            {posts.map(({ node }) => (
              <PostCard key={node.fields.slug} node={node} />
            ))}
          </div>
        </PostWrapper>
      </Page>
    </IndexLayout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tag
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
