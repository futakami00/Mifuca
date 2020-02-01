import * as React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { skins } from '../styles/theme'

const Works = () => (
  <IndexLayout skin={skins.works}>
    <Page>
      <Container>
        <h1>Contents Locked!</h1>
        <p>何もありません・・・</p>
        <p
          css={css({
            opacity: 0.5,
            fontSize: '0.875rem'
          })}
        >
          (※このコンテンツは管理人が特定の条件を満たすと解放されます。)
        </p>
        <Link to="/blog">戻る</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default Works
