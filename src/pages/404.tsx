import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { skins } from '../styles/theme'

const NotFoundPage = () => (
  <IndexLayout skin={skins.notFound}>
    <Page>
      <Container>
        <h1>404: Not Found.</h1>
        <p>『 君がこのページを見ているということは、僕（お探しのページ）はもうこのURLにはいないだろう。</p>
        <p>できれば君に見てもらいたかったけど、無理だったみたいだ。本当にごめん。</p>
        <p>もし、生まれ変わることができたのなら、その時は必ず君の力になりたいと思う。</p>
        <p>それと、管理人のことは責めないでやってほしい。アイツは、ああ見えて繊細な奴だから。</p>
        <p>最後に、君にこの言葉を伝えるよ。</p>
        <p>「404 Not Found：お探しのページは見つかりませんでした」</p>
        <p>それじゃあ、元気で・・・』</p>
        <p>
          <Link to="/blog">記事一覧ページへ</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
