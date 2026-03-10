# areSets

## 説明

指定された空でない配列が `Set` インスタンスのみを含むかどうかを確認し、含む場合は `true`、それ以外は `false` を返します。

### ユースケース

値（例: ユーザー入力、JSON の解析、外部 API など）を処理する前に、それが空でない `Set` オブジェクトの配列であることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areSets` を使用して、反復処理を行い各要素に対して `Set` API（例: `.size`、`.has`、`.add`）を呼び出す前に、不明な入力を検証します。

### 利点

- 入力が空でない配列であり、かつ各要素がすべて `Set` インスタンスである場合にのみ `true` を返します。
- 配列に要素がない場合は `false` を返すことで、空配列に対する誤検知を防ぎます。
- 各要素に対して `Set` 固有の操作を行う前の実行時ガードとして有用です。

## 使用方法

### 構文

関数:

- `areSets(array)`

パラメータ:

- `array`: `Set` インスタンスであるかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a は実行時に Set インスタンスの配列です
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areSets(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areSets](../_analysis/areSets.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:14:01 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>