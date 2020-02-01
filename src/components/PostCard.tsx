import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const PostContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    background: #ddd;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  &:focus::before,
  &:hover::before {
    transform: scale(1, 1);
  }
`
const LinkCard = styled(Link)`
  display: flex;
  align-items: start;
  text-decoration: none;
  &:focus,
  &:hover {
    color: white;
  }
`

const PostCardContent = styled.div`
  padding: 1rem 2rem;
  h3 {
    font-size: ${theme.fontSizes[2]};
    font-weight: 600;
    letter-spacing: 0.05em;
    margin: 0;
  }
  time {
    font-size: ${theme.fontSizes[0]};
    font-weight: 600;
    margin: 0;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    h3 {
      font-size: ${theme.fontSizes[1]};
      font-weight: 600;
      line-height: 1.3;
    }
    time {
      font-size: 0.6rem;
      font-weight: 600;
      line-height: 1;
    }
  }
`

const Tag = styled.div`
  padding: 0 14px;
  margin-left: 1.1rem;
  display: inline-block;
  background: #eee;
  font-size: 0.65rem;
  font-weight: 600;
  line-height: 2;
`

type PostCardProps = {
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
}

const PostCard: React.FC<PostCardProps> = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const { date } = node.frontmatter
  const { tag } = node.frontmatter
  return (
    <PostContainer>
      <LinkCard to={node.fields.slug}>
        <PostCardContent>
          <h3>{title}</h3>
          <time>{date}</time>
          <Tag>{tag}</Tag>
        </PostCardContent>
      </LinkCard>
    </PostContainer>
  )
}

export default PostCard
