# areIndexesFound

## 説明

`areIndexesFound` は、値が空でない配列であり、その要素がすべて有効なインデックスかどうかを確認し、該当する場合は `true`
、そうでない場合は `false` を返します。

### ユースケース

ユーザー提供または外部データ（例: パースした JSON）がインデックスのリストであることを想定している場合に、配列へアクセスしたり配列をスライスしたりする前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areIndexesFound` を使って、未知の入力を配列インデックスとして扱う前にその要素を検証してください。空配列や、インデックスではない値を含む配列に対しては
`false` を返します。

### 利点

- 入力が要素の入った配列であり、かつ各要素がすべて有効なインデックスである場合にのみ `true` を返します。
- 早期に失敗します: インデックスではない要素に遭遇した時点で直ちに `false` を返します。
- 値を配列の位置やオフセットとして使用する前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areIndexesFound(array)`

パラメータ:

- `array`: インデックス要件を満たしているか確認する対象の配列。

### ローカル関数インポート

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // ここでは、`a` がインデックスで埋められた配列であることが確認されています。
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areIndexesFound(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:42:26 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>