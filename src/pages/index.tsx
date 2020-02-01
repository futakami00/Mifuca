import * as React from 'react'

import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import Container from '../components/Container'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 10vh;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 2px 2px 0 #8edae5, -2px -2px 0 #f99695;
    margin: 5rem auto;
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
    left: -100%;
    content: '';
    z-index: -1;
    width: 300%;
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
