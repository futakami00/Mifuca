import * as React from 'react'

import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import Container from '../components/Container'
import theme from '../styles/theme'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 4rem;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 2px 2px 0 #8edae5, -2px -2px 0 #f99695;
    margin: 5rem auto;
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 2.5rem;
    }
  }
`

const Menu = styled.div`
  display: block;
  text-align: center;
  margin: 7rem auto 2rem;
`

const textStyle = css({
  color: '#333',
  opacity: 1,
  '&:hover': {
    color: '#fff',
    opacity: 1
  }
})

const StartLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  line-height: 1;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes[3]};
  &::after {
    position: absolute;
    bottom: -10%;
    left: -40%;
    content: '';
    z-index: -1;
    width: 180%;
    height: 120%;
    /* border-radius: 20px; */
    /* background: linear-gradient(to right, #ffffff 0%, #6fdafc 30%, #2c09b3 100%); */
    /* background: linear-gradient(to right, #ffffff 0%, #87e2ff 50%, #ffba1f 100%); */
    background: linear-gradient(to right, #ffffff 0%, #00eeff 50%, #ffffff 100%);
    transform: scale(1, 0);

    transition: transform 0.2s;
  }
  &:focus::after,
  &:hover::after {
    transform: scale(1, 1);
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes[2]};
  }
`

const IndexPage = () => (
  <IndexLayout>
    <Container>
      <Section>
        <h1>Mifuca.net</h1>
        <Menu>
          <StartLink to="/blog" css={textStyle}>
            <span css={textStyle}>- Click To Start -</span>
          </StartLink>
        </Menu>
      </Section>
    </Container>
  </IndexLayout>
)

export default IndexPage
