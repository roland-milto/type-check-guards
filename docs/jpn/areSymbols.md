# areSymbols

## 説明

入力が要素が埋まった配列であり、その要素がすべてシンボルかどうかを確認し、`true` または `false` を返します。

### ユースケース

設定フィールド（例: シンボルで表現された一意キーのリスト）が、API で `symbol[]` を要求する場面で使用する前に、シンボルのみを含む空でない配列であることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areSymbols` を使用して、不明な入力を `symbol[]` として扱う前に検証してください。配列以外および空配列に対しては `false`
> を返します。

### 利点

- 入力が空でない配列であり、かつ各要素がすべてシンボルである場合にのみ `true` を返します。
- 内部の「要素が埋まった配列」チェックにより、配列以外および空配列を拒否して誤検知を防ぎます。
- 後続処理の前に、シンボルのみのリストであることを検証するための実行時型ガードとして有用です。

## 使用方法

### 構文

関数:

- `areSymbols(array)`

パラメータ:

- `array`: シンボル要素かどうかをチェックする配列。

### ローカル関数インポート

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a は実行時にシンボルのみの配列である
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areSymbols(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:22:24 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>