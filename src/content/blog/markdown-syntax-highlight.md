---
title: 'GatsbyJS | ブログ内のコードに色付け(シンタックスハイライト)する'
date: "2020-02-07"
tag: "Gatsby"
---

GatsbyのブログにPrismJSを導入しました。
PrismJSはブログ内で書いたコードを良い感じにシンタックスハイライトを入れてくれるやつです。


↓ こういうの。

```js:title=fizzBuzz.js
const fizzBuzz = n => {
  for(let i = 1; i <= n; i++) {
    console.log(i % 15 === 0 ? 'FizzBuzz!' : (i % 3 === 0 ? 'Fizz' : (i % 5 === 0 ? 'buzz' : i)))
  }
}

fizzBuzz(100)

```
かわいい
</br>
</br>

## 導入手順


### prismjs,gatsby-remark-prismjsをインストール

**yarn**
```sh
yarn add prismjs gatsby-remark-prismjs

```

**npm**
```sh
npm install -S prismjs gatsby-remark-prismjs
```
</br>

これは、Gatsbyのスターターによっては最初から入ってるので、人によってはすでにインストールされているかも。


### gatsby-config.jsで設定
インストールが完了したら`gatsby-config.js`を開いて`plugins`に追加

```js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-code-titles'
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: { sh: 'bash' },
            showLineNumbers: false,
            noInlineHighlight: false
          }
        }
      ]
    }
  }
]
```

`gatsby-transformer-remark`の下に記述します。

オプションは、とりあえず`aliases`でbashのショートカットを作ったぐらいでそのままにしました。よくわからないので。

### シンタックスハイライトの適用
[PrismJS](https://prismjs.com/)でいくつかスタイルが用意されているので、グッときたのを選びます。

自分は**OKAIDIA**を選びました。**OKAIDIA**がグッときました。
</br>

</br>

スタイルを選んだら、`gatsby-browser.js`で読み込みます。

```js:title=gatsby-browser.js

import 'prismjs/themes/prism-okaidia.css'
//[okaidia]の部分に好きなスタイル名に入れる

```
</br>

GitHubに[PrismJSのCSSファイル](https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes)を置いてくれているので細かい調整などは各自で頑張る。

終わり。

####　コメント
全身黒コーディネートの人に、あれ？シンタックスハイライト効かないんですか？って煽るのやめてください。傷つくので。
