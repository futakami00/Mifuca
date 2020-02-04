---
title: 'テスト投稿'
date: "2019-12-25"
tag: "test"
---

## h2大見出し

**太字**

~~取り消し線~~

改行1
改行1

改行2

>引用　これは引用です。
>>引用の引用 汝に幸多からんことを・・・


```javascript:title=fizzbuzz.js

const fizzbuzz = n => {
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz!');
    } else if(i % 3 === 0) {
      console.log('Fizz,');
    } else if(i % 5 === 0) {
      console.log('Buzz,');
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100)

```
これは、`inline-code`です。



### h3見出し
+ リスト
- リスト2
* リスト3
