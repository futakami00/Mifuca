import * as React from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { skins } from '../styles/theme'
import MyIcon from '../img/icon.jpg'
import Twitter from '../img/twitter.svg'
import GitHub from '../img/github.svg'

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`
const Avatar = styled.img`
  display: block;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 0 auto;
`

const Name = styled.div`
  text-align: center;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 200px;
  background: #fff;
  margin: 0 auto 2rem;
  text-align: center;
`
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0.5rem;
`

const AboutPage = () => (
  <IndexLayout skin={skins.about}>
    <Page>
      <Container>
        <Section>
          <h1>ABOUT</h1>
          <Avatar src={MyIcon} />
          <Name>
            ふたかみ
            <span css={css({ fontSize: '0.75rem' })}>(CV: 堀江由衣)</span>
          </Name>
          <IconBox>
            <a href="https://twitter.com/futakami_">
              <Icon src={Twitter} alt="Twitter" />
            </a>
            <a href="https://github.com/futakami00">
              <Icon src={GitHub} alt="GitHub" />
            </a>
          </IconBox>
          <p>
            趣味でプログラミングをやっています。このサイトは、Gatsby.jsというなんかすごいフレームワークを使って作りました。主に学習の記録や技術的なメモとして使っていこうと思っています。
          </p>
          <p>好きな食べ物はお肉、ドーナツ、ティラミス、チョコミント、コーヒーです。</p>
          <p>末永く仲良くしてください。よろしくお願いします人間ども。</p>
        </Section>
      </Container>
    </Page>
  </IndexLayout>
)

export default AboutPage
