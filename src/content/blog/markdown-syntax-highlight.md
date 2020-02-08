---
title: 'GatsbyJS | ブログ内のコードに色付け(シンタックスハイライト)する'
date: "2020-02-07"
tag: "Gatsby"
---

Gatsbyのブログでシンタックスハイライトが効くようにしました。

例：
```js
const fizzBuzz = n => {
  for(let i = 1; i <= n; i++) {
    console.log(i % 15 === 0 ? 'FizzBuzz!' : (i % 3 === 0 ? 'Fizz' : (i % 5 === 0 ? 'buzz' : i)))
  }
}

fizzBuzz(100)

```
↑ こういうコード書いたら色が付くやつ。

### gatsby-remark-prismjsをつかう

